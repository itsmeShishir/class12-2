def add(a,b):
    return a+b

def sub(a,b):
    return a-b

def mul(a,b):
    return a*b

def div(a,b):
    if b == 0:
        return 0
    return a / b

def calculator():
    print("welcome to calcator")
    print("1. Add")
    print("2. Sub")
    print("3. Mul")
    print("4. Div")
    print("5. Exit")
    choice = int(input("Enter your choice: "))
    if choice >= 1 and choice <= 4:
        a = int(input("Enter first number: "))
        b = int(input("Enter second number: "))
        if choice==1:
            print("Result: ", add(a,b))
            return calculator()
        elif choice==2:
            print("Result: ", sub(a,b))
            return calculator()
        elif choice==3:
            print("Result: ", mul(a,b))
            return calculator()
        elif choice==4:
            print("Result: ", div(a,b))
            return calculator()
        else:
            print("Invalid choice")
            return calculator()
        
    elif choice==5:
        print("you are existing")
        return 
    else:
        print("Invalid choice")
        return calculator()
    

calculator()