from .models import CarMake, CarModel


def initiate():
    car_make_data = [
        {"name": "NISSAN", "description": "Great cars. Japanese technology"},
        {"name": "Mercedes", "description": "Great cars. German technology"},
        {"name": "Audi", "description": "Great cars. German technology"},
        {"name": "Kia", "description": "Great cars. Korean technology"},
        {"name": "Toyota", "description": "Great cars. Japanese technology"},
    ]

    car_make_instances = []
    for data in car_make_data:
        car_make_instances.append(
            CarMake.objects.create(
              name=data["name"], 
              description=data["description"]
              )
        )

    # Create CarModel instances with the corresponding CarMake instances
    car_model_data = [
        {
            "name": "Pathfinder",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[0],
        },
        {
            "name": "Qashqai",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[0],
        },
        {
            "name": "XTRAIL",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[0],
        },
        {
            "name": "A-Class",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[1],
        },
        {
            "name": "C-Class",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[1],
        },
        {
            "name": "E-Class",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[1],
        },
        {
            "name": "A4",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[2],
        },
        {
            "name": "A5",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[2],
        },
        {
            "name": "A6",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[2],
        },
        {
            "name": "Sorrento",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[3],
        },
        {
            "name": "Carnival",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[3],
        },
        {
            "name": "Cerato",
            "carType": "Sedan",
            "year": 2023,
            "car_make": car_make_instances[3],
        },
        {
            "name": "Corolla",
            "carType": "Sedan",
            "year": 2023,
            "car_make": car_make_instances[4],
        },
        {
            "name": "Camry",
            "carType": "Sedan",
            "year": 2023,
            "car_make": car_make_instances[4],
        },
        {
            "name": "Kluger",
            "carType": "SUV",
            "year": 2023,
            "car_make": car_make_instances[4],
        },
        # Add more CarModel instances as needed
    ]

    for data in car_model_data:
        CarModel.objects.create(
            name=data["name"],
            car_make=data["car_make"],
            carType=data["carType"],
            year=data["year"],
        )
