import requests, asyncio

async def main():
    print(requests.post('http://localhost:5000/flask/start_maple').json()['msg'])

if __name__ == "__main__":
    asyncio.run(main())
