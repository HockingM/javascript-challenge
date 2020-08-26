// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", filterTable);
form.on("submit", filterTable);

// Complete the event handler function for the form
function filterTable() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(date => (date.datetime) === inputValue);

  console.log(filteredData);

  // create an array with just the city values
    var city = filteredData.map(date => date.city);
    console.log(city);
};