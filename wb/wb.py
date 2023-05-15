# Exercise: Summation of Multiples
# Objective: Write a function that accepts an integer, n, and returns the sum of all natural numbers below n that are multiples of 3 or 5. If n is negative, return 0. Numbers that are multiples of both 3 and 5 should only be counted once.

# Example: For n = 10, the function should return 23, because 3, 5, 6, and 9 are the multiples of 3 or 5 below 10, and their sum is 23.

def sum_of_multiples(n):
    if n < 0:
        return 0
    _sum = 0
    for num in range(1, n):
        if num % 3 == num % 5 == 0:
            _sum += num
        elif num % 3 == 0:
            _sum += num
        elif num % 5 == 0:
            _sum += num
    return _sum

print(sum_of_multiples(10))
print(sum_of_multiples(100))
print(sum_of_multiples(1000))
print(sum_of_multiples(10000))

def sum_of_multiples_list(n):
    if n < 0:
        return 0
    _ls = []
    for num in range(1, n):
        if num % 3 == num % 5 == 0:
            _ls.append(num)
        elif num % 3 == 0:
            _ls.append(num)
        elif num % 5 == 0:
            _ls.append(num)
    return sum(_ls)

print(sum_of_multiples_list(10))
print(sum_of_multiples_list(100))
print(sum_of_multiples_list(1000))
print(sum_of_multiples_list(10000))