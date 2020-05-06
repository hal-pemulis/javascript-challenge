// from data.js
var tableData = data;

// Select the button
var button = d3.select("button");

// Select the form
var form = d3.select("#form-control");

// Select the table body
var tableBody = d3.select("tbody")

// Create event handlers 
button.on("click", eventHandler);
form.on("submit", eventHandler);

// Complete the event handler function for the form
function eventHandler() {

  // Prevent refreshing
  d3.event.preventDefault();

  // Select rows and clear table
  tableBody.selectAll("tr").remove()

  // Select HTML of input element 
  var userDate = d3.select(".date-field");
  var userCity = d3.select(".city-field");
  var userState = d3.select(".state-field");
  var userCountry = d3.select(".country-field");
  var userShape = d3.select(".shape-field");


  // Get value property of inputElement
  var inputDate = userDate.property("value");
  var inputCity = userCity.property("value");
  var inputState = userState.property("value");
  var inputCountry = userCountry.property("value");
  var inputShape = userShape.property("value");


  // Use the form input to filter the data by input fields
  var sightings = tableData
  
  if (datetime) {
    sightings = sightings.filter(sighting => sighting.datetime === inputDate);
  }
  if (inputCity) {
    sightings = sightings.filter(sighting => sighting.city === inputCity);
  }
  if (inputState) {
    sightings = sightings.filter(sighting => sighting.state === inputState);
  }
  if (inputCountry) {
    sightings = sightings.filter(sighting => sighting.country === inputCountry);
  }
  if (inputShape) {
    sightings = sightings.filter(sighting => sighting.shape === inputShape);
  }

  // Create arrays for each column
  var datetime = sightings.map(sighting => sighting.datetime);
  var city = sightings.map(sighting => sighting.city);
  var state = sightings.map(sighting => sighting.state);
  var country = sightings.map(sighting => sighting.country);
  var shape = sightings.map(sighting => sighting.shape);
  var durationMinutes = sightings.map(sighting => sighting.durationMinutes);
  var comments = sightings.map(sighting => sighting.comments);

  // Use a for loop to append new rows to table and populate with filtered data
  for (var sighting = 0; sighting < sightings.length; sighting++) {
    var newRow = tableBody.append("tr");
    newRow.append("td").text(datetime[sighting]);
    newRow.append("td").text(city[sighting]);
    newRow.append("td").text(state[sighting]);
    newRow.append("td").text(country[sighting]);
    newRow.append("td").text(shape[sighting]);
    newRow.append("td").text(durationMinutes[sighting]);
    newRow.append("td").text(comments[sighting]);
  }

};
