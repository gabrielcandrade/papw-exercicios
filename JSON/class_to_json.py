import json

class Teacher:
	name = 'Fujioka'
	age = '55'
		
#create object
japonese = Teacher()
japonese.name = 'Fujioka'
japonese.age = '55'

#convert to JSON string
jsonStr = json.dumps(japonese.__dict__)

#print json string
print(jsonStr)