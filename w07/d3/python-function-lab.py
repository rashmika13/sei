def sum_to(number):
    sum = 0
    for n in range(1, number + 1):
        sum = sum + n
    return sum


print(sum_to(6))


def largest(*args):
    largest = 0
    for arg in args:
        if arg > largest:
            largest = arg
    return largest


print(largest(4, 1, 7, 9, 100))


def occurances(s1, s2):
    count = s1.count(s2)
    return count


print(occurances('nessecery segment', 's'))


def product(*args):
    result = 1
    for arg in args:
        result = result * arg
    return result


print(product(1, 2, 3))
