$(document).ready(function() {

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBx4pfg4wAOxNsas-jHQqMwIL0Ws0vjFA8",
    authDomain: "trainscheduler-3e64c.firebaseapp.com",
    databaseURL: "https://trainscheduler-3e64c.firebaseio.com",
    projectId: "trainscheduler-3e64c",
    storageBucket: "",
    messagingSenderId: "947932364860",
    appId: "1:947932364860:web:149d166ab20a77d0fe8339"
  };

  firebase.initializeApp(firebaseConfig);

// Variable to reference Firebase database
var database = firebase.database();

// Initial variables to store info for each train
var name;
var place;
var frequency;
var firstTime;
var nextArrival;
var minutesAway;

// Click listener for train form submit button. This will capture the values inputted into the form and update database accordingly (addChild).
$("#add-train").on("click", function(event){
  event.preventDefault();

  name = $("#name-input").val().trim();
  place = $("#place-input").val().trim();
  frequency = $("#frequency-input").val().trim();
  firstTime = $("#time-input").val().trim();

  console.log(name);
  console.log(place);
  console.log(frequency);
  console.log(firstTime);

  database.ref().push({
    trainName: name,
    destination: place,
    dbfrequency: frequency,
    dbfirstTime: firstTime
  });

  $("#name-input").val("");
  $("#place-input").val("");
  $("#frequency-input").val("");
  $("#time-input").val("");

});

// Firebase .on("child_added") method that will display database info on index page on page load and update index page when any database values change.
database.ref().on("child_added", function(snapshot) {
  console.log(snapshot.val());

  // store everything into a vriable
  var tName = snapshot.val().trainName;
  var tPlace = snapshot.val().destination;
  var tFrequency = snapshot.val().dbfrequency;
  var tFirstTime = snapshot.val().dbfirstTime;
  
  // ******Next arrival and Minutes Away Calculations here******

  // display results inside the table
  var tr = $("<tr>");

  // create vars to hold table elements and content
  tr.append(
    "<td>" + tName + "</td>",
    "<td>" + tPlace + "</td>",
    "<td>" + tFrequency + "</td>",
    "<td> To Be Calculated </td>",
    "<td> To Be Calculated </td>"
  )

  $("tbody").append(tr);
  // append all table data to table row
  // append to tbody element
  
});

// Function using moment.js, current time (on page load?), and frequency to calculate next train arrival time

// Function using moment.js, next arrival time, and current time (on page load?) to calculate minutes away

});