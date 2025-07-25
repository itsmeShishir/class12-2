# # Condition and Loops 
# # Conditions -> check if the condition is true or false
# # 1. if , else , elif
# # 2. match 

# # wap to check if the given user is 18 or not
# age  = int(input("enter you age: "))
# if(age > 18):
#     print("you are above 18")
# else:
#     print("you are below 18")

# # wap to check the marks of the student
# marks = int(input("enter your marks: "))
# if(marks>= 80):
#     print("A grade")

# if(marks >=60 and marks < 80):
#     print("B grade")

# if(marks >= 40 and marks < 60):
#     print("C grade")

# if(marks > 32 and marks <40):
#     print("D grade") 

# else:
#     print("fail")

# # elif -> else if
# marks = int(input("enter your marks: "))
# if(marks>= 80):
#     print("A grade")

# elif(marks >=60 and marks < 80):
#     print("B grade")

# elif(marks >= 40 and marks < 60):
#     print("C grade")

# elif(marks > 32 and marks <40):
#     print("D grade") 

# else:
#     print("fail")

# # wap to check if the given number is above 18 and is even
# a_number = int(input("enter a number: "))
# if (a_number > 18):
#     if (a_number %2 ==0):
#         print("above 18 and even")
#     else:
#         print("odd number")
# else:
#     print("below 18 and ")

# # wap to check which day is today
# day = int(input("enter day: "))
# match(day):
#     case 1:
#         print("sunday")
#     case 2:
#         print("tuesday")
#     case 3:
#         print("thursday")
#     case _:
#         print("invalid day")

# Loop -> repeat the same task multiple times until the condition is False
#  for , while
for i in range(0,12): 
    print(i)

# wap a program to print the reverse order number from 20 to 10 and also print only even number
# using if else only 
for i in range(20, 9 , -1):
    if (i % 2 == 0):
        print("even number: ",i)

# while loop 
i = 0
while(i<=10):
    print(i)
    i+=1

i = 10
while(i>=0):
    if (i % 2 == 0):
        print("even number: ",i)
    i-=1

# Breaking Statement 
# -> Continue , break, pass

if(i%2==0):
    pass
print("hello")
# break => terminate the loop
for i in range(0,10):
    if i == 5:
        break
    print(i)

# continue -> skip the current iteration
for i in range(0,10):
    if i %2 == 0:
        continue
    print("odd number: ",i)