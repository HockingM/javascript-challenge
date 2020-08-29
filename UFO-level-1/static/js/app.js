// from data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("tbody");

// select the button
var button = d3.select("#filter-btn");

// select the form
var form = d3.select("#form");

// create event handlers 
button.on("click", filterTable);
form.on("submit", filterTable);

// complete the event handler function for the form
function filterTable() {
  
  // refresh table ie remove child data from node
  tbody.html("");
  // prevent the page from refreshing
  d3.event.preventDefault();

  // select the input element and get the raw HTML node
  var dateElement = d3.select("#datetime");

  // get the value property of the input element
  var dateValue = dateElement.property("value");

  // console.log(inputValue);
  // console.log(tableData);

  // filter the data for the input element matches
  var ufoReports = tableData.filter(row => (row.datetime) === dateValue);

  ufoReports.forEach(function (ufoReport) {
    // console.log(ufoReports);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function ([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
}