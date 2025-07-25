class Hello:
    def __init__(self, name, age):
        print("hello world from constructor")
        self.full_name = name
        self.real_age  = age
        print(name, age)

    def printDetails(self):
        return f"hello world from method {self.full_name} , {self.real_age}"
    
hellos = Hello("ram", 33)
print(hellos.printDetails())
hello1 = Hello("sita", 23)
print(hello1.printDetails())


