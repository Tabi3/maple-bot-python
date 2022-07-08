def f():
    class N(int):
        def __init__(self) -> None:
            super().__init__()
    
    return N()

print(type(f()))