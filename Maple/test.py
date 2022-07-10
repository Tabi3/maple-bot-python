import asyncio
import requests, uuid, os

async def main(url):
    resp = __import__("requests").get(url).content
    with open(f'./Maple/file_buffers/{(file_id := str(__import__("uuid").uuid4()))}.{url.split(".")[-1]}', 'wb') as handler:
        handler.write(resp)
    return f"file_buffers/{file_id}.{url.split('.')[-1]}"
    
    
asyncio.run(main('https://cdn.discordapp.com/attachments/956813186026315777/989496003654746182/chinese.mov'))