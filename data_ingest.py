# data_ingest.py: Script to load jsondata.json into MongoDB.

import json
from pymongo import MongoClient

# Configuration (update if needed)
MONGO_URI = 'mongodb://localhost:27017/'
DB_NAME = 'visualization_db'
COLLECTION_NAME = 'data'

def ingest_data(json_file='jsondata.json'):
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]
    
    # Load JSON data
    with open(json_file, 'r') as f:
        data = json.load(f)
    
    # Insert (assuming data is a list of dicts)
    if isinstance(data, list):
        collection.insert_many(data)
    else:
        collection.insert_one(data)
    
    print(f"Inserted {collection.count_documents({})} documents into {DB_NAME}.{COLLECTION_NAME}.")
    client.close()

if __name__ == '__main__':
    ingest_data()
