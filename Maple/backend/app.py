import contextlib, json, asyncio
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from pyppeteer import launch
import uuid, datetime

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager


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
                    return jsonify(access_token=j.id, expires_on = j.Expires), 200
            
            session = MyAccountSession(AccountId=i.id, Expires=datetime.datetime.now(datetime.timezone.utc) 
                                       + datetime.timedelta(0, 21600, 0), id = access_token)
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
    return wolfram_query.myDict

if __name__ == '__main__':
    app.run(debug=True)