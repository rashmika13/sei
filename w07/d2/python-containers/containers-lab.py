students = ['Mark', 'Jacob', 'Jessica', 'Priya']
print(students[1])
print(students[-1])

foods = ('enchilada', 'burger', 'idli', 'soup')
for good_food in foods:
    print(f'{good_food} is a good food')
e, b, i, s = foods
print(i, s)


home_town = {
    'city': 'Los Angeles',
    'state': 'California',
    'population': 12447000
}
print(
    f'I was born in {home_town["city"]}, {home_town["state"]}- population of {home_town["population"]}')

for key, val in home_town.items():
    print(f"{key} = {val}")

cohort = []

for index, student in enumerate(students):
    cohort.append({
        'student': student,
        'fav_food': foods[index]
    })

for student in cohort:
    print(student)


awesome_students = [f'{student_name} is awesome!' for student_name in students]
for each_student in awesome_students:
    print(each_student)

for food_with_a in [food for food in foods if 'a' in food]:
    print(food_with_a)
