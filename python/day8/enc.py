# encapsulation -> the way of hidding properties 
#  _, __ -> hide 
#  __ -> double underscore
#  _ -> single underscore

class Parent:
    def __init__(self, firstname, midelname, lastname):
        self.firstname = firstname
        self.middlename = midelname
        self.__lastname = lastname  # private variable

    def getLastName(self):
        return self.__lastname
    
    @property
    def lastname(self):
        return self.__lastname

    @lastname.setter
    def lastname(self, lastname):
        self.__lastname = lastname

    def setLastname(self, lastname):
        self.__lastname = lastname

    def _full_details(self): #protected
        return f"{self.firstname} {self.middlename} {self.__lastname}"
    
    def printinfo(self):
        return self._full_details()

child1 = Parent("shishir", "ram", "bhandari")

print(child1.firstname)
print(child1.middlename)
print(child1.getLastName())
child1.setLastname("bhandari")
print(child1.getLastName())
print(child1.printinfo())
# print(child1._full_details()) -> protected method
child1.lastname = "bhandari"
print(child1.lastname)
