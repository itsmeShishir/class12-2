# what do you mean by set -> set is a collection of unique items
set1 = {1,2,3,4,5,1,5,1}
print(set1)
print(type(set1))
# set Methods -> add, remove, discard, pop, clear, union, intersection, difference
# Add methods -> add value add garxa last ma
set1.add(6)
print(set1)
# remove methods -> it removes the element which comes first
set1.remove(1)
print(set1)
# # discard methods -> it removes the element which comes first
set1.discard(5)
print(set1)
# # pop -> it removes the first element
set2 = {1,2,3}
set2.pop()
print(set2)
# # clear -> provides the empty set
set2.clear()
print(set2) # set()
# # union -> it combines two sets and provides the unique value
set3 = {1,2,3}
set4 = {4,5,6}
set5 = set3.union(set4)
print(set5)
# # intersection -> it privide common element from 2 set
set3 = {1,2,3, 5}
set4 = {4,5,6}
set5 = set3.intersection(set4)
print(set5)

# # difference -> it provide the difference between 2 set
set3 = {1,2,3,5}
set4 = {4,5,6}
set5 = set3.difference(set4)
set6 = set4.difference(set3)
print(set5)
print(set6)

set7 = {1,2,3,4,5,6,7,8,9}
for i in set7:
    print(i)

tuple22 = (1,2,2,3,3,4,5,6,7,8,8,8,9)
# wap to print unique number using for loop
set1 = set(tuple22)
print(set1)
for i in set1:
    print(i)

# 