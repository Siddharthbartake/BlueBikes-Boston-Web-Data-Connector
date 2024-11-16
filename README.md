# Live BlueBikes-Boston-Web-Data-Connector For Tableau
Created a Web Data Connector that connects Tableau Desktop with the ArcGIS GeoServices REST API Live Data

# ArcGIS Web Data Connector (WDC) for Tableau

This repository contains the HTML and JavaScript code to build a Web Data Connector (WDC) for Tableau to connect with ArcGIS GeoServices REST APIs. The WDC allows users to import and visualize geospatial data directly in Tableau.

## Features
- Connects to ArcGIS GeoServices REST API.
- Enables data import for geospatial analysis in Tableau.
- Simple and user-friendly interface.

## Files
- **index.html**: Main HTML file for the web interface.
- **connector.js**: Custom JavaScript code implementing the Tableau WDC logic.

## Prerequisites
- Tableau Desktop (2020.1 or later recommended).
- A running ArcGIS GeoServices REST API endpoint.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/arcgis-wdc.git
   ```
2. Place the files in a web-accessible directory or use a local server (e.g., [http-server](https://www.npmjs.com/package/http-server)).

## Usage
1. Open the `index.html` file in a browser.
2. Click on the **Connect and Load Data** button to establish a connection with the ArcGIS REST API.
3. Follow Tableau's prompts to complete the data import process.

## Tableau Configuration
- Use Tableau's Web Data Connector feature (Data > Connect > To a Server > Web Data Connector).
- Enter the URL of the hosted `index.html` file.

## Dependencies
- [Tableau WDC Library](https://tableau.github.io/webdataconnector/): Included via CDN.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
```

You can copy and paste this directly into your `README.md` file on GitHub. Let me know if you need further assistance!
