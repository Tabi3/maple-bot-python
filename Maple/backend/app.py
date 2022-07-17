import contextlib
import json
import asyncio
from http import cookies
from bs4 import BeautifulSoup
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from pyppeteer import launch
import uuid
import datetime

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import requests


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)


class Account(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    email = db.Column(db.String(60))
    username = db.Column(db.String(40))
    password = db.Column(db.String(100))

    def change_password(self, new_password, old_password):
        item = Account.query.get_or_404(self.id)
        if old_password == self.password:
            item.password = new_password
            db.session.commit()

    def change_username(self, new_username, password):
        item = Account.query.get_or_404(self.id)
        if self.password == password:
            item.username = new_username
            db.session.commit()

    def change_email(self, new_email, password):
        item = Account.query.get_or_404(self.id)
        if self.password == password:
            item.username = new_email
            db.session.commit()


class MyAccountSession(db.Model):
    id = db.Column(db.String(300), primary_key=True)
    AccountId = db.Column(db.String(36))
    Expires = db.Column(db.DateTime())

    def is_expired(self):
        return datetime.datetime.now(datetime.timezone.utc) > self.Expires


app.config["JWT_SECRET_KEY"] = "f89xzeeTGardeniaClassic031419"
jwt = JWTManager(app)


@app.route("/flask/hello", methods=["GET"])
@jwt_required()
async def hello():
    current_user = Account.query.get_or_404(get_jwt_identity())
    username, email = [current_user.username, current_user.email]
    return {"Username": username, "Email": email}, 200


@app.route("/flask/data/list", methods=["POST", "GET"])
async def databaselist():
    ...


@app.route("/flask/signup", methods=["POST"])
async def signup():
    username, password, email = [request.json[x].lower() for x in ["username", "password", "email"]]
    for i in Account.query.all():
        if username == i.username or email == i.email:
            return jsonify({"msg": "Existing"}), 403
    new_account = Account(email=email, username=username, password=password, id=str(uuid.uuid4()))
    db.session.add(new_account)
    db.session.commit()
    return jsonify({"msg": "Success"}), 200


@app.route("/flask/delete", methods=["POST"])
async def delete_account():
    username, password, email = [request.json[x].lower() for x in ["username", "password", "email"]]
    for i in Account.query.all():
        if (username == i.username or email == i.email) and password == i.password:
            db.session.delete(i)
            db.session.commit()
            return jsonify({"msg": "Success"}), 200
    return jsonify({"msg": "Cannot Find Account"}), 403


@app.route("/flask/login", methods=["POST"])
async def login():
    username, password, email = [request.json[x].lower() for x in ["username", "password", "email"]]
    for i in Account.query.all():
        if (username == i.username or email == i.email) and password == i.password:
            for j in MyAccountSession.query.all():
                access_token = create_access_token(identity=i.id)
                if i.id == j.AccountId:
                    j.Expires = datetime.datetime.now(datetime.timezone.utc
                                                      ) + datetime.timedelta(0, 21600, 0)
                    j.id = access_token
                    return jsonify(access_token=j.id, expires_on=j.Expires), 200

            session = MyAccountSession(AccountId=i.id, Expires=datetime.datetime.now(datetime.timezone.utc)
                                       + datetime.timedelta(0, 21600, 0), id=access_token)
            db.session.add(session)
            db.session.commit()
            return jsonify(access_token=access_token), 200
    return jsonify({"msg": "Bad credentials"}), 401


@app.route("/flask/wolfram_query", methods=["POST"])
async def wolfram_query():
    query = request.json['my_query']
    browser = await launch(headless=True, args=['--no-sandbox'],
                           autoClose=False, handleSIGINT=False,
                           handleSIGTERM=False, handleSIGHUP=False)
    page = await browser.newPage()

    await page.goto(f'https://www.wolframalpha.com/input?i={query.replace("+", "%2B")}')
    cdp = await page.target.createCDPSession()
    await cdp.send('Network.enable')
    await cdp.send('Page.enable')

    wolfram_query.myDict = {}

    def wolframupdates(response):
        with contextlib.suppress(Exception):
            temp = json.loads(response["response"]["payloadData"])["pods"]
            tem2 = {i["title"]: [(j["img"]["src"] if j["img"]["type"]
                                  == "2DMathPlot_1" else j["img"]["data"] if j["title"]
                                  == "" else [j["title"], j["img"]
                                              ["data"]]) for j in i["subpods"]] for i in temp if
                    i["numsubpods"] != 0}
            globals()["wolfram_query"].myDict.update(tem2)
    cdp.on('Network.webSocketFrameReceived', wolframupdates)
    cdp.on('Network.webSocketFrameSent', wolframupdates)
    await asyncio.sleep(9)
    await browser.close()
    return jsonify(wolfram_query.myDict)

globals()["619362be-2b10-45be-bf89-46ddd498cfe8"] = None


@app.route('/flask/start-bot', methods=['POST'])
async def start_bot():
    if globals()["619362be-2b10-45be-bf89-46ddd498cfe8"] != None:
        return dict(msg="process already started"), 500
    subprocess = __import__('subprocess')
    globals()["619362be-2b10-45be-bf89-46ddd498cfe8"] = subprocess.Popen(['python', './Maple/bot/main.py'], shell=True)
    return dict(msg="Success"), 200


@app.route('/flask/stop-bot', methods=['POST'])
async def stop_bot():
    if globals()["619362be-2b10-45be-bf89-46ddd498cfe8"] is None:
        return dict(msg="process already stopped"), 500
    subprocess = __import__('subprocess')
    subprocess.Popen(f"TASKKILL /F /PID {globals()['619362be-2b10-45be-bf89-46ddd498cfe8'].pid} /T")
    globals()["619362be-2b10-45be-bf89-46ddd498cfe8"] = None
    return dict(msg="Success"), 200


@app.route("/flask/khub-login", methods=['POST'])
async def get_session():
    browser = await launch(headless=False, args=['--window-position=9999,9999'],     handleSIGINT=False,
                           handleSIGTERM=False,
                           handleSIGHUP=False)
    page = await browser.newPage()
    elements = dict(
        button='button[class^="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]',
        input_field='input[class^="whsOnd zHQkBf"]',)
    await page.goto('https://khub.cvc.pshs.edu.ph/login/index.php')
    soup = BeautifulSoup(await page.content(), 'lxml')
    await page.goto(soup.find('a', {"class": 'btn btn-secondary'})['href'])
    await asyncio.sleep(1)
    for i in request.json['login']:
        await page.type(elements['input_field'], i)
        await page.click(elements['button'])
        await asyncio.sleep(3)
    await asyncio.sleep(1)
    cookies = (lambda cookies: {i: cookies[i] for i in cookies if i in ['value', 'name']})((await page.cookies())[0])
    await browser.close()
    return dict(cookie=cookies), 200


async def parse_advisers(advisers):
    return [{"profile": i['href'],
             "name": i['title'],
             "pfp": i.find('img')['src']}for i in advisers]


@app.route('/flask/khub', methods=['GET', 'POST'])
async def khub_home_page():
    with requests.session() as session:
        session.cookies.set(**request.json['cookie'])
        home_main = (home := BeautifulSoup(session.get('https://khub.cvc.pshs.edu.ph/').text, 'lxml')).select_one('div[role="main"]')
        home_courses = home_main.select_one('div[id="frontpage-course-list"]').select('div[class="card"]')
        home_courses = [{'link': i.find_all('a')[0]['href'],
                         'title': i.find('h4').find('a').text,
                         'img': i.find_all('a')[0].find('img')['src'],
                         'description': (lambda x: "\n".join(list({i.get_text() for i in x.find_all()}) if x else 'None'))(i.select_one('div[class="no-overflow"]')),
                         'advisers': await parse_advisers(i.select('a[class="contact"]'))} for i in home_courses]
        return jsonify(home=home_courses), 200


if __name__ == '__main__':
    app.run(debug=True)
