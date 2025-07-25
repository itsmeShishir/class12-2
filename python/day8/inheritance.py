#  parent -> peoperties and methods -> child

class Parent:
    # lastname = "bhandari"
    def __init__(self, lastname):
        self.lastname = lastname
        print("hello from parent")

    def printLastName(self):
        print(self.lastname)

class Child(Parent):
    # firstname = "shishir"
    def __init__(self,firstname, lastname):
        self.firstname = firstname
        print("hello from child")
        super().__init__(lastname)

    def PrintDetails(self):
        print(f"Hello {self.firstname} {self.lastname}")


obj1 = Child("shishir", "bhandari")
obj1.PrintDetails()
obj1.printLastName()

obj2 = Child("ram", "khanal")
obj2.PrintDetails()
obj2.printLastName()
