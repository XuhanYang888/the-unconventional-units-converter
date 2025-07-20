import json
import random

# unit to type / type to unit mappings
unit_to_type = {}
type_to_unit = {}

with open('data/units.json', 'r') as file:
    data = json.load(file)

for item in data["default_units"]:
    for type_key, unit_value in item.items():
        unit_to_type[unit_value] = type_key
        type_to_unit[type_key] = unit_value

def convert_unit_random(value, unit):
    unit_type = unit_to_type[unit]
    # print(unit_type)
    with open(f'data/{unit_type}.json', 'r') as file:
        data = json.load(file)
    random_unit = random.choice(data[unit_type])
    # print(random_unit)
    conversion_factor = random_unit[unit]
    # print(conversion_factor)
    return value / conversion_factor, random_unit['object'].replace("_", " ")

value = int(input("Enter the value: "))
unit = input("Enter the unit: ")
result = convert_unit_random(value, unit)
print(f"{value} {unit} is approximately {result[0]:.2f} average {result[1]}.")
