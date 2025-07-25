# operations -> read, write, append, delete
# file -> read -> r mode = existing file 
# file -> write -> w mode = create new file
# file -> append -> a mode = create new file
# file -> delete -> import os -> os.remove("filename") -> existing file

# mode = "r", "w", "a", "r+", "w+", "a+" -> fs.seek(0)"

# delete => OS -> remove

# syntax -> 2 with , without 

fs1 = open("python/day9/file/read.txt", mode="r")
readtext = fs1.read()
print(readtext)

fs2 = open("python/day9/file/write.txt", mode="w")
fs2.write("hello my name is shishir bhandari\nmy age is 27\ni am teaching at dursikshya education network")
fs2.close()

fs3 = open("python/day9/file/write.txt", mode="w+")
fs3.write("network")
fs3.seek(3)
readdata = fs3.read()
print(readdata)

fs4 = open("python/day9/file/append.txt", mode="a")
fs4.write(fs1.read())
fs4.close()

# with mode -> with open("filename", mode="r") as fs1:
#     readdata = fs1.read()
#     print(readdata)

with open("python/day9/file/append.txt", mode="r") as fs6:
    readdatas = fs6.read()
    print(readdatas)
    fs6.close()

# Wap to print the table from 0 to 10 using for loop and file handling make seprate file for this task
for i in range(0,11):
    fs = open(f"python/day9/file/{i}.txt", mode="w")
    for j in range(0,11):
        fs.write(f"{i} * {j} = {i*j}\n")