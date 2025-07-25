class Student:
    name = "hari"
    age = 20
    gender = "male"

    @classmethod
    def PrintDetails(cls):
        print(f"my name is {cls.name} and age is {cls.age} and gender is {cls.gender}")

    @staticmethod
    def addNumber(a,b):
        print(f"{a+b}")


Student.PrintDetails()
Student.addNumber(10,20)

# wap that create class with class method and normal methods that print details like name, age, gender also use constructor to print details