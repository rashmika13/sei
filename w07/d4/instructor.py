class Vehicle():
    def __init__(self, vin, make, model, running = False):
        self.vin = vin
        self.make = make
        self.model = model
        self.running = running
    
    def __str__(self):
        return f"Vehicle {self.vin} is a {self.make} model {self.model}"

    def start(self):
        self.running = True

    def stop(self):
        self.running = False

car = Vehicle('TS123', 'Tesla', 'Model S')
print(car.running) # -> False
car.start()
print(car)
print(car.running) # -> True
plane = Vehicle('X99Y', 'Boeing', '747-B')
print(plane.vin, plane.make, plane.model)


class Dog():

    next_id = 1

    def __init__(self, name, age = 0):
        self.name = name
        self.age = age
        self.id = Dog.next_id
        Dog.next_id += 1

    def __str__(self):
        return f"Dog ({self.id}) named {self.name} is {self.age} years old"

    def __repr__(self):
        return f"{self.name}"

    def bark(self):
        # print(self)
        print(f"{self.name} says woof!")

    @classmethod
    def __str__(cls):
        return 'Dog ' + str(cls.next_id)

    @classmethod
    def get_total_dogs(cls):
        # print(cls)
        return cls.next_id - 1

print(Dog)

class ShowDog(Dog):
    # Add additional parameters AFTER those in the superclass
    def __init__(self, name, age = 0, total_earnings = 0):
        # Always call the superclass's __init__ first
        Dog.__init__(self, name, age)
        # Now add any new attributes
        self.total_earnings = total_earnings

    # Add additional methods
    def add_prize_money(self, amount):
        self.total_earnings += amount

spot = Dog('Spot', 3)
jacks = Dog('Jackson', 5)

winky = ShowDog('Winky', 3, 1000)
print(winky) # Yay, inherited the overriden __str__
winky.bark() # Yay, inherited the bark method
print(winky.total_earnings) # -> 1000
winky.add_prize_money(500) # New method that 'Dogs' don't have
print(winky.total_earnings) # -> 1500

# print(spot.total_earnings)
