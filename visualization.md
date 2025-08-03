# Visualization Setup Explanation

## Overview
The visualization uses JavaScript (Plotly.js) to render interactive charts from fetched data. It supports bar charts (e.g., topic distribution), pie charts (e.g., region breakdown), and 3D graphs (e.g., scatter for likelihood/intensity/relevance).

## Setup
1. Include in HTML: Link to visualization.js and Plotly CDN in dashboard.html.
2. Run Flask app (app.py) to serve /api/data endpoint.
3. On page load, JS listens for filter applies, fetches data, and renders charts.

## Key Visualizations
- **Bar Chart**: Shows counts/distributions (e.g., topics by intensity).
- **Pie Chart**: Proportions (e.g., regions by relevance).
- **3D Graph**: Multi-axis insights (e.g., likelihood vs. intensity vs. relevance).
- Loading: Spinner during API calls.

## Tools & Customization
- Plotly.js for interactive plots.
- Fetch API for data retrieval.
- Dynamic filters update charts in real-time.

This setup enables browser-based visualizations without additional installs.
