// visualization.js (adapted from original dashboard.js): Client-side JS for fetching data and rendering Plotly charts.

document.addEventListener('DOMContentLoaded', function() {
    // Filter application
    document.getElementById('apply-filters').addEventListener('click', function() {
        showLoading(true);
        const filters = {
            topic: document.getElementById('topic').value,
            region: document.getElementById('region').value,
            // Add other filters: sector, pest, source, etc.
        };
        fetchData(filters);
    });
});

function fetchData(filters) {
    let url = '/api/data?';
    for (let key in filters) {
        if (filters[key]) url += `${key}=${filters[key]}&`;
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderCharts(data);
            showLoading(false);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function renderCharts(data) {
    // Example: Bar chart for topics
    const topicTrace = {
        x: data.map(d => d.topic),
        y: data.map(d => d.intensity || 1), // Assume fields like intensity
        type: 'bar'
    };
    Plotly.newPlot('topic-chart', [topicTrace], {title: 'Topics Distribution'});

    // Pie chart for regions
    const regionTrace = {
        labels: data.map(d => d.region),
        values: data.map(d => d.relevance || 1),
        type: 'pie'
    };
    Plotly.newPlot('region-pie', [regionTrace], {title: 'Region Breakdown'});

    // 3D graph example
    const scatter3dTrace = {
        x: data.map(d => d.likelihood),
        y: data.map(d => d.intensity),
        z: data.map(d => d.relevance),
        mode: 'markers',
        type: 'scatter3d'
    };
    Plotly.newPlot('3d-graph', [scatter3dTrace], {title: '3D Insights'});
}

function showLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
}
