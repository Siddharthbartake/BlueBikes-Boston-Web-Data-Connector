let myConnector = tableau.makeConnector();

// Initialization
myConnector.init = function (initCallback) {
    console.log("Initialization started");

    // Check for the correct phase
    if (tableau.phase === tableau.phaseEnum.interactivePhase) {
        tableau.connectionName = "ArcGIS Data"; // Set a name for the connector
    }

    // Mark initialization as complete
    initCallback();

    console.log("Initialization completed");
};

// Schema Definition
myConnector.getSchema = function (schemaCallback) {
    console.log("Defining schema");

    let cols = [
        
        { id: "Number", alias: "Number", dataType: tableau.dataTypeEnum.string },
        { id: "Name", alias: "Name", dataType: tableau.dataTypeEnum.string },
        { id: "Latitude", alias: "Latitude", dataType: tableau.dataTypeEnum.float },
        { id: "Longitude", alias: "Longitude", dataType: tableau.dataTypeEnum.float },
        { id: "District", alias: "District", dataType: tableau.dataTypeEnum.string },
        { id: "Public_", alias: "Public", dataType: tableau.dataTypeEnum.string },
        { id: "Total_docks", alias: "Total_docs", dataType: tableau.dataTypeEnum.int },
        { id: "ObjectId", alias: "ObjectId", dataType: tableau.dataTypeEnum.int }
        
    ];

    let tableSchema = {
        id: "arcgisData",
        alias: "ArcGIS Data",
        columns: cols
    };

    schemaCallback([tableSchema]);
};

// Fetch Data
myConnector.getData = function (table, doneCallback) {
    console.log("Fetching data");

    let apiUrl = "https://services.arcgis.com/sFnw0xNflSi8J0uh/arcgis/rest/services/Blue_Bike_Stations/FeatureServer/0/query?where=1%3D1&outFields=*&f=json";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("API Response Data:", data);

            // Map data to the Tableau schema
            let tableData = data.features.map(feature => ({
                Number: feature.attributes.Number,
                Name: feature.attributes.Name,
                Latitude: feature.geometry.y,  // Correct for Latitude (y-coordinate)
                Longitude: feature.geometry.x, // Correct for Longitude (x-coordinate)
                District: feature.attributes.District,
                Public_: feature.attributes.Public_,
                Total_docks: feature.attributes.Total_docks,
                ObjectId: feature.attributes.ObjectId
            }));

            // Append rows to the Tableau table
            table.appendRows(tableData);
            doneCallback();
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
};

// Register the connector with Tableau
tableau.registerConnector(myConnector);

// Function to handle connection and submission
function connect() {
    console.log("Attempting to submit connection...");

    // Ensure Tableau's phase is interactive before submission
    if (tableau.phase === tableau.phaseEnum.interactivePhase) {
        tableau.submit(); // Proceed with submission
    } else {
        console.log("Tableau is not in interactive phase yet.");
    }
}
