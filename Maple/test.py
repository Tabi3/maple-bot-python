import asyncio

async def derivative(f):
    return lambda x: (f(x+1e-2)-f(x-1e-2))/2e-2

async def main():
    f = lambda x: x**2
    print((await derivative(f))(1))
    ...

if __name__ == "__main__":
    asyncio.run(main())
