// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Build a Table from 11.5.1
function buildTable(data) {
    // Clear existing data first
    tbody.html("");
    // Loop through each object in the array
    // Append a row to the HTLM table, add each key/value Value from the object into a cell
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and 
        // Add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
    // Keep track of all filters
    var filters = {};

    // Create a function to replace handleClick() function
    function updateFilters() {
      
      let date = d3.select("#datetime").property("value");
      let city = d3.select("#city").property("value");
      let state = d3.select("#state").property("value");
      let country = d3.select("#country").property("value");
      let shape = d3.select("#shape").property("value");
      let filteredData = tableData;

// need to loop through this part?

      if (date) {
        // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date)
       }
      if (city) {
        // Apply `filter` to the table data to only keep the rows where the `cityName` value matches the filter value
            filteredData = filteredData.filter(row => row.city === city)
      }
      if (state) {
        // Apply `filter` to the table data to only keep the rows where the `stateName` value matches the filter value
            filteredData = filteredData.filter(row => row.state === state)
       }     
      if (country) {
        // Apply `filter` to the table data to only keep the rows where the `countryName` value matches the filter value
            filteredData = filteredData.filter(row => row.country === country)
       }   
      if (shape) {
        // Apply `filter` to the table data to only keep the rows where the `shapeName` value matches the filter value
            filteredData = filteredData.filter(row => row.shape === shape)
       }   
    buildTable(filteredData);
    };

// // Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", updateFilters);

// // Build the table when the page loads
buildTable(tableData);
