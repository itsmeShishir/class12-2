# Polymorhism -> 
class Animal:
    def make_sound(self):
        raise NotImplementedError("Subclass must implement this abstract method")
    
class Dog(Animal):
    def make_sound(self):
        return "bark"
    
class Cat(Animal):
    def make_sound(self):
        return "meow"
    
class Human(Animal):
    def make_sound(self):
        return "speak"
    
animals = [Dog(), Cat(), Human()]
print(animals)
for animal in animals:
    print(animal.make_sound())