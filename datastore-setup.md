# Datastore Choice & Setup

## Datastore Choice
- **Database**: MongoDB (NoSQL, document-oriented, ideal for flexible JSON data with fields like topic, region, sector, PEST, source).
- **Why?**: The original project uses MongoDB for dynamic querying and filtering. It supports unstructured/semi-structured data, easy integration with Flask/PyMongo, and scales for visualization apps.

## Setup Script
1. Install MongoDB (download from https://www.mongodb.com/try/download/community; or via brew: `brew install mongodb-community`).
2. Start MongoDB server: `mongod --dbpath /path/to/data` (or use service: `brew services start mongodb-community`).
3. Create database and collection:
use visualization_db;
db.createCollection("data");
5. (Optional) Verify: `show dbs;` and `db.data.find();` after ingestion.

This setup provides a simple document store for the JSON data.
