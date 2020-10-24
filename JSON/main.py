import json

json_string = """
{
    "teacher": {
        "name": "Ford Prefect",
        "species": "Betelgeusian",
        "relatives": [
            {
                "name": "Zaphod Beeblebrox",
                "species": "Betelgeusian"
            }
        ]
    }
}
"""
data = json.loads(json_string)

print(data)
print(data['teacher'])

# A consulta do data via dict impoe este ser uma leitura de uma entrada JSON.