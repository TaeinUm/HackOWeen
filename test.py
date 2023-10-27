from pymongo import MongoClient
import json

def fetch_data_and_convert_to_geojson(arr):
    # Connect to MongoDB
    client = MongoClient('mongodb+srv://taeinum:1q2w3e4r@tum.2e9wmpr.mongodb.net/?retryWrites=true&w=majority')

    # Select the database
    db = client['hackoween']

    # Select the collection
    collection = db['crowd_map']

    # Fetch the data from MongoDB
    documents = collection.find()

    # Convert the data to GeoJSON format
    feature = {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [arr[2], arr[1]]
        },
        "properties": {
            "name": arr[0],
            "data": arr[3]
        }
    }

    # Define the filter for the update
    filter = {"name": arr[0]}


    geojson = {
        "feature": feature
    }

    # Convert GeoJSON to JSON string
    geojson_str = json.dumps(geojson, indent=2)

    # Send the GeoJSON data to the backend
    # Here you would send the geojson_str to your backend
    # For this example, we'll just print it
    print(geojson_str)

    # Update the data if name is the same, otherwise insert a new document
    result = collection.update_one(filter, {"$set": feature}, upsert=True)
    if result.upserted_id:
        print("Data inserted with id:", result.upserted_id)
    else:
        print("Data updated")

