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
