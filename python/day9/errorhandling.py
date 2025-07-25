# 10/0
# print(10/0)
# try except else finally
try:
    # print(10/0)
    print(10/5)
# except ZeroDivisionError:
#     print("cannot divide by zero")
except Exception as e:
    print(e)
else:
    print("no error found")
finally:
    print("this is finally block")