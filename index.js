// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#dateTime");
var $dateTimeBtn = document.querySelector("#dateTimeSearch");
var $cityInput = document.querySelector("#city");
var $cityBtn = document.querySelector("#citySearch");
var $stateInput = document.querySelector("#state");
var $stateBtn = document.querySelector("#stateSearch");
var $countryInput = document.querySelector("#country");
var $countryBtn = document.querySelector("#countrySearch");
var $shapeInput = document.querySelector("#shape");
var $shapeBtn = document.querySelector("#shapeSearch");

// Add event listeners to each of the searchButtons, call handle...ButtonClick when clicked
$dateTimeBtn.addEventListener("click", handleDateTimeButtonClick);
$cityBtn.addEventListener("click", handleCityButtonClick);
$stateBtn.addEventListener("click", handleStateButtonClick);
$countryBtn.addEventListener("click", handleCountryButtonClick);
$shapeBtn.addEventListener("click", handleShapeButtonClick);
// Initially set filteredReports to dataSet from data.js
let filteredReports = dataSet;

// renderTable renders the filteredReports to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredReports.length; i++) {
    // Get get the current report object and its fields
    var report = filteredReports[i];
    var fields = Object.keys(report);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the dataSet object, create a new cell and set its inner text to be the current value at the current report's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = report[field];
    }
  }
}

function handleDateTimeButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDateTime = $dateTimeInput.value.trim().toLowerCase();
  // Set filteredReports to an array of all Reports whose "date/time" matches the filter
  filteredReports = filteredReports.filter(function(report) {
    var reportDateTime = report.datetime.toLowerCase();
    // If true, add the report to the filteredReports, otherwise don't add it to filteredReports
    return reportDateTime === filterDateTime;
  });
  renderTable();
}

//do the same for the other four searchButtons
function handleCityButtonClick() {
  var filterCity = $cityInput.value.trim().toLowerCase();
  filteredReports = filteredReports.filter(function(report) {
    var reportCity = report.city.toLowerCase();
    return reportCity === filterCity;
  });
  renderTable();
}
function handleStateButtonClick() {
  var filterState = $stateInput.value.trim().toLowerCase();
  filteredReports = filteredReports.filter(function(report) {
    var reportState = report.state.toLowerCase();
    return reportState === filterState;
  });
  renderTable();
}
function handleCountryButtonClick() {
  var filterCountry = $countryInput.value.trim().toLowerCase();
  filteredReports = filteredReports.filter(function(report) {
    var reportCountry = report.country.toLowerCase();
    return reportCountry === filterCountry;
  });
  renderTable();
}
function handleShapeButtonClick() {
  var filterShape = $shapeInput.value.trim().toLowerCase();
  filteredReports = filteredReports.filter(function(report) {
    var reportShape = report.shape.toLowerCase();
    return reportShape === filterShape;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
