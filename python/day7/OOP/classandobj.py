# Class and Object 
# class -> template to create object
class One:
    # 2 ota properties -> name and age
    name = "Shishir"
    age = 27

    # methods -> functions in class -> self
    def PrintDetails(self, name, age):
        print(f"hello {self.name} your age is {self.age}")
        
    def PrintDetail(self, name, age):
        print(f"hello {name} your age is {age}")

    # Constructor -> special methods

    def __init__(self):
        print("this is constructor")
    
# object -> instance of the class
one = One()
print(one.name)
one.PrintDetails("hari", 20)
print(one.age)
one.PrintDetail("hari", 20)
print(One.name)
