# String Methods -> 
# 1. capitalize -> first letter capital
# 2. lower -> all small letter
# 3. upper -> all capital letter
# 4. title -> first letter capital of each word

# bool output
# 1. isdigit -> check number
# 2. isalpha -> check alphabet
# 3. isalnum -> check number and alphabet
# 4. iscapital -> check capital letter
# 5. islower -> check small letter

# [:-1] -> slice string
# [::-1] -> reverse string
# [firstindex : lastindex : step] 

name = "    shishir"
print(name.capitalize()) #Shishir
print(name.lower()) #shishir
print(name.upper()) #SHISHIR
des = "hi my name is shishir bhadari"
print(des.title())
print(name.islower())
print(name.isupper())
num = "123"
print(name.isdigit())
print(num.isdigit())
print(name.isalpha())
print(name.isalnum())
print(num.isalnum())

strs = "shishir bhandari"
print(strs[:9])
print(strs[::-1])
print(strs[::-1])
print(strs[:-1:2])
print(name.count("i"))
print(name.lstrip())
print(name.rstrip())
print(name.replace("shishir", "hari"))

# Keywords -> inbuild _> variables
# if, else, elif, for, while, def, count, list, srt, tuple, int, float, bool, class etc
# Variable -> camelCase, snake_case -> shishir_bhandari
# certain rules -> python is case sensitive, $%#
# python is dynamically typed


#types conversion in python -> str -> int -> float, list-> tuple-> set, int -> bool
print(int("1234"))
print(float(1234))
print(bool(0))
print(bool(10))
print(list("1234"))
print(tuple("1234"))
print(set("1234"))

# Operators and operands
#1. Arthmetic operators -> +, -, *, /, %, //, **
print(5+5)
print(5-5)
print(5*5)
print(5 / 5) # 1.0
print(5 // 5) # -> integer division 1
print(5**5) # 5*5*5*5*5
print(5%5) #-> remainder 0
# 2. Assignment operators -> =, +=, -=, *=, /=, %=, //=, **=
a = 5
a += 5 # a = a + 5
print(a)
a-=1
print(a)
a*=5
print(a)
a/=5
print(a) #9.0
a%=5
print(a) #4.0
a//=5
print(a) #0.0
a **=5
print(a) #0.0
# 3. Comparison operators -> ==, !=, >, <, >=, <= # bool
print(5==5)
print(5!=6)
print(5>5)
print(5<5)
print(5>=5)
print(5<=5)
# 4. Logical operators -> and, or, not # true bool
print(True and True) # True
print(True and False) # False
print(False and True) # False
print(False and False) # False
# or -> true if any one is true
print(True or True) # True
print(True or False) # True
print(False or True) # True
print(False or False) # False
# not -> reverse the value
print(not True) # False
print(not False) # True
# 5. Identity operators -> is, is not -> bool # ram address
list1 = "shishir"
print(list1 is "shishir")
print(list1 is not "shishir")
# 6. Membership operators -> in, not in -> bool
list1 = [1,2,3,4,5]
print(3 in list1)
print(5 not in list1)
# 7. Bitwise operators -> &, |, ^, ~, <<, >> -> value 
print(5&5)
print(5|5)
print(5^6)
# 8. Ternary operators -> condition ? true : false -> 
age = 20
print("drive" if age> 18 else "no drive")