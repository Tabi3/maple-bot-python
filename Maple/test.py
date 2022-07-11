import asyncio
import subprocess

async def main():
    p = subprocess.Popen(["c:/Users/Neon/Desktop/Python Projects/New "
                          "Maple/maple-bot-python/Maple/Scripts/python.exe",
                          './Maple/bot/main.py'], shell=True)
    await asyncio.sleep(10)
    subprocess.Popen(f"TASKKILL /F /PID {p.pid} /T")
    return

if __name__ == "__main__":
    asyncio.run(main())
