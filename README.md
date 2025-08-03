# Data Visualization Dashboard Project

This is a Flask-based data visualization dashboard for dynamic filtering and interactive charting of structured data (e.g., topics, regions, sectors). It uses MongoDB for storage, Python for ingestion, and JavaScript (Plotly) for visualizations.

## Key Components
- **Datastore**: MongoDB for flexible JSON-like data storage.
- **Data Ingestion**: Python script to load sample JSON data into MongoDB.
- **Visualization**: JavaScript script to fetch data via API and render interactive charts (bar, pie, 3D).
- **Features**: Filters (topic, region, sector, PEST, source), loading indicators, and API endpoints.
- **Demo Screenshot**: See dashboard.png.

## API Endpoints
| **Endpoint**      | **Method** | **Description**                 |
|-------------------|------------|---------------------------------|
| `/`               | GET        | Renders the dashboard page      |
| `/api/data`       | GET        | Fetches data from MongoDB based on filters |

Example API Call:  
```http
http://127.0.0.1:5000/api/data?topic=oil&region=Europe
```

## Setup
1. Set up MongoDB (see datastore-setup.md).
2. Run data_ingest.py to ingest data.
3. Run the Flask app (python app.py) to view the dashboard (optional; use provided screenshot if unable to run).
4. Open your browser and go to: http://127.0.0.1:5000/
5. For visualizations, the JS script handles rendering.

## License
MIT
