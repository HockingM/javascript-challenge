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

  // select the input elements and get the raw HTML node
  var dateElement = d3.select("#datetime");
  var dateValue = dateElement.property("value");

  var cityElement = d3.select("#city");
  var cityValue = cityElement.property("value").trim().toLowerCase();

  var stateElement = d3.select("#state");
  var stateValue = stateElement.property("value").trim().toLowerCase();

  var countryElement = d3.select("#country");
  var countryValue = countryElement.property("value").trim().toLowerCase();

  var shapeElement = d3.select("#shape");
  var shapeValue = shapeElement.property("value").trim().toLowerCase();

  // concatenate all input elements
  var filterElements = [dateValue, cityValue, stateValue, countryValue, shapeValue];
  //console.log(filterElements);

  // create array of keys
  var dataKeys = ["datetime", "city", "state", "country", "shape"];

  // create object for array of key-value maps where "inputValueExists"
  var filterValues = {};

  // create array
  for (var i = 0; i < dataKeys.length; i++) {
    if (filterElements[i] !== "") {
      filterValues[dataKeys[i]] = filterElements[i];
    };
  }
  //console.log(filterValues);

  // filter data using array and search function
  var ufoResults = tableData.filter(search, filterValues);
  //console.log(ufoResults);

  // use keys in array to filter tableData and return results to ufoResults array
  function search(tableData) {
    return (Object.keys(this).every((key) => tableData[key] === this[key]));
  }

  // update table values
  ufoResults.forEach(function (ufoResult) {
    var row = tbody.append("tr");
    Object.entries(ufoResult).forEach(function ([key, value]) {
      //console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  })
};
