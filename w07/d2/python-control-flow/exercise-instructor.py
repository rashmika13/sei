# color = input('Enter "green", "yellow", "red": ').lower()

# while color != 'quit':
#     print(f'The user entered {color}')

#     if color == 'green':
#         print('Go!')
#     elif color == 'yellow':
#         print('Slow it doooowwwwnnnnn')
#     elif color == 'red':
#         print('Stop!')
#     else:
#         print('Bogus color!')

#     color = input('Enter "green", "yellow", "red": ').lower()

# print('Goodbye')

while True:
    color = input('Enter "green", "yellow", "red": ').lower()
    print(f'The user entered {color}')

    if (color == 'quit'):
        print('Goodbye')
        break

    if color == 'green':
        print('Go!')
    elif color == 'yellow':
        print('Slow it doooowwwwnnnnn')
    elif color == 'red':
        print('Stop!')
    else:
        print('Bogus color!')








""" use the if...elif...else instead
if color == 'green':
    pass
if color == 'red':
    pass
if color == 'yellow':
    pass
if color != 'red' and color != 'yellow' and color != 'green':
    pass
"""