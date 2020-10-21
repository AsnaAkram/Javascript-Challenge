// from data.js
var tabledata = data;
//var tbody = document.getElementsByTagName("tbody");
// YOUR CODE HERE!
// Find a <table> element with id="myTable":
var tbody = d3.select("tbody");
//console.log(tbody)
// Get a reference to the table body


// Console.log the weather data from data.js

// // Step 3:  Use `Object.entries` to console.log each weather report value
tabledata.forEach(function(UFO_element) {
var row = tbody.append("tr");
//console.log(UFO_element)
Object.entries(UFO_element).forEach(function([_,value]) {
    //console.log(key, value);
    var cell = row.append("td");
    cell.text(value)
  });
});


//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.
var dateinput = document.getElementById("datetime");

// adding event listner
dateinput.addEventListener("input", function(event){
   event.preventDefault()
   var date_str=event.target.value;
   var filtered_data=tabledata.filter(function(UFO_element){
    console.log(UFO_element.datetime)
    console.log(date_str)
    return UFO_element.datetime.includes(date_str)   
   });
   
   tabledata=filtered_data

  });



