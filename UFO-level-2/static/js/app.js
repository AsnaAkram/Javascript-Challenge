// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js

var tabledata = data;

function renderData(data) {
  var tbody = d3.select("tbody");
  data.forEach(function (UFO_element) {
    var row = tbody.append("tr");
    Object.entries(UFO_element).forEach(function ([_, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
renderData(tabledata);

var dateinput = document.getElementById("datetime");

dateinput.addEventListener("input", function (event) {
  event.preventDefault();
  var date_str = event.target.value;
  var filtered_data = tabledata.filter(function (UFO_element) {
    return UFO_element.datetime.includes(date_str);
  });
  d3.selectAll("tr").remove();
  renderData(filtered_data);
});

// tabledata.map(({ country }) => country) - loops over all the objects in the data and returns an array of countries
// ({country}) => country - is the same as (ufoElement) => ufoElement.country
// [...new Set(data)] - creates an array of unique values(no duplicates)
// ['us', 'ca']
const countries = [...new Set(tabledata.map(({ country }) => country))];

// I added a select element in the index.html file
// we're getting the element using document.getElementById
const countrySelect = document.getElementById("country-dropdown");

// we loop through all of the countries
countries.forEach((country) => {
  // for each country, we create an option element and add a text and value properties
  const option = document.createElement("option");
  option.text = country;
  option.value = country;
  // and then we add it to the select as options
  countrySelect.add(option);
});

countrySelect.addEventListener("change", (e) => {
  const country = e.target.value;

  const filteredData = tabledata.filter((ufoElement) => {
    return ufoElement.country === country;
  });

  d3.selectAll("tr").remove();
  renderData(filteredData);
});
