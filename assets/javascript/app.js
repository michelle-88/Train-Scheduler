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
var firstTime;
var frequency;
var nextArrival;
var minutesAway;

// Click listener for train form submit button. This will capture the values inputted into the form and push the values to the database.
$("#add-train").on("click", function(event){

  // Prevent default behavior when form is submitted (page will not refresh)
  event.preventDefault();

  // Capture values inputted into form and store as variables
  name = $("#name-input").val().trim();
  place = $("#place-input").val().trim();
  firstTime = $("#time-input").val().trim();
  frequency = $("#frequency-input").val().trim();
  
  // Log the values captured from the form to the console
  console.log(name);
  console.log(place);
  console.log(firstTime);
  console.log(frequency);

  // Push these values to the database as a new child
  database.ref().push({
    trainName: name,
    destination: place,
    dbfirstTime: firstTime,
    dbfrequency: frequency
  });

  // Clear the form input fields once form is submitted
  $("#name-input").val("");
  $("#place-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
  
});

// .on("child_added") firebase method that will return a snapshot of the info in the database on page load and everytime a child is added.
database.ref().on("child_added", function(snapshot) {

  // Log the value of the database snapshot to the console
  console.log(snapshot.val());

  // Pull individual pieces of train info from the snapshot and store them in variables that we will use to display info in html
  var tName = snapshot.val().trainName;
  var tPlace = snapshot.val().destination;
  var tFrequency = snapshot.val().dbfrequency;
  var tFirstTime = snapshot.val().dbfirstTime;
  
  // ******Next Arrival and Minutes Away Calculations here******
  // var currentTime = moment().format("HH:mm");
  // console.log(currentTime);
  
  // var timeDiff = currentTime.diff(moment(tFirstTime, "X"), "minutes");
  // console.log(timeDiff);
  
  
  // Create variable for new table row element that we will then add train info to
  var newRow = $("<tr>");

  // Attach train info from database snapshot to the new row element
  newRow.append(
    $("<td>").text(tName),
    $("<td>").text(tPlace),
    $("<td>").text(tFrequency)
  )

  // Attach filled new row element to the table body
  $("tbody").append(newRow);
  
});

// Function using moment.js, current time (on page load?), and frequency to calculate next train arrival time

// Function using moment.js, next arrival time, and current time (on page load?) to calculate minutes away

});