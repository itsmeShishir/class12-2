def addMethods(fixed_value):
    def decorators(func):
        def wrapper(*agrs, **kwargs):
            results = func(*agrs, **kwargs)
            return results + fixed_value
        return wrapper
    return decorators

@addMethods(10)
def AddNumber(a,b):
    return a+b

@addMethods(20)
def AddNumbers(b):
    return b

print(AddNumber(5, 10)) 
print(AddNumbers(5))
