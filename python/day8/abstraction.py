from abc import ABC, abstractmethod

# tea -> milk , blackTea
class Tea(ABC):
    
    def takingOrder(self):
        return "taking order"
    
    @abstractmethod
    def makeTea(self):
        pass

    @abstractmethod
    def addMaterials(self):
        pass

    @abstractmethod
    def pour(self):
        pass

    def server(self):
        return "server"
    
    def process(self):
        takingOrder = self.takingOrder()
        makeTea = self.makeTea()
        addMaterials = self.addMaterials()
        pour = self.pour()
        server = self.server()
        return f"{takingOrder}\n {makeTea}\n {addMaterials}\n {pour}\n {server}"

class MilkTea(Tea):
    def makeTea(self):
        return "make tea"
    
    def addMaterials(self):
        return "add materials sugar, milk, milk pouder"
    
    def pour(self):
        return "pour in cup"
    

class BlackTea(Tea):
    def makeTea(self):
        return "make tea"
    
    def addMaterials(self):
        return "add materials sugar, water, leamon"
    
    def pour(self):
        return "pour in glass"
    
oneMilktea = MilkTea()
print(oneMilktea.process())

oneBlackTea = BlackTea()
print(oneBlackTea.process())