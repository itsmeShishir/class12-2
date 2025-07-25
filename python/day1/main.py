# Syntax -> rules to follows while programming 
print("hello world")
# Variable -> container -> RAM -> binary Format data store garxa
name = "shishir"
age = 27
print(name , age)
name = "hari"
print(name)

# Comment -> interpreture la ignore gardinxa 
#  Types of comment -> single line comment 
    # -> single line comment 
"""
    this is 
    a 
    comment 
"""
'''
    single quotation
'''
"this is"
print("hi")
# Data types in python 
# 1. String -> collection of characters 
    #  '', "", """ """
details  = """
    my name is shishir
    my age is 27
    my gender is male
"""
print(details)
details  = "my name is shishir.\nmy age is 27.\nmy gender is male"
print(details)
info = 'it\'s me shishir'
print(info)
# 2. Number -> int, float, complex
anumber = 10 # int
print(anumber)
print(type(anumber))
another_number = 10.5 # float
print(another_number)
print(type(another_number))
a_complex_number = 1+ 3j
print(a_complex_number)
print(type(a_complex_number))
# 3. bool -> True, False
print(type(True))
print(type(False))
# 4. None -> None
aValue = None
print(aValue)
print(type(aValue))
# 5. list, dic, tuple -> 
# 5.1 (List) -> it is a collection of mutable items, 
list1 = [1,2,3,4,5,6]
# index -> 5 , length -> 6
print(list1)
print(type(list1))

# (5.2) tuple -> it is also collection of immutable items.
tup1 = (1,2,3,4,5,6)
# index -> 5, length-> 6
print(tup1)
print(type(tup1))

# (5.3) Dict -> it is a collection of key and value pair 
dict1 = {
    "name":"shishri",
    "age": 27
}
print(dict1)
print(type(dict1))
# 6. set, -> collection of unique values
set1 = {1,2,3,4,5,6}
print(set1)
print(type(set1))

# how to ask input from the user 
abc = int(input("enter a value"))
abc2 =int(input("enter second value: "))
print(abc + abc2) 

