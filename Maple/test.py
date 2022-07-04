

def f():
    y = "+"
    z = __import__("copy").copy(locals())
    [i(z) for i in (lambda x: x.update(y = f'{x["y"]}`{cog}`\n', _ = ()) for cog in [str(i) for i in range(10)])]
    print(z)
    

f()