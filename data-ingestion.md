# Data Ingestion Explanation

## Overview
The ingestion process loads sample data from jsondata.json (containing entries with fields like topic, region, sector, PEST, source, etc.) into a MongoDB collection for querying and visualization.

## Steps
1. **Extract**: Read the JSON file using Python's json module.
2. **Transform**: No major transformations needed. but can add validation (e.g., ensure fields exist).
3. **Load**: Use PyMongo to insert documents into the 'data' collection. Handles lists of dicts for bulk insert.

## Tools Used
- Python with json and pymongo.

## Example Output
The script prints "Inserted X documents..." where X is the number of entries (e.g., based on original JSON size).
