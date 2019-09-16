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
var name = "";
var place = "";
var frequency = 0;
var nextArrival = "";
var minutesAway = 0;

// Click listener for train form submit button. This will capture the values inputted into the form and update database accordingly (addChild).


// Firebase .on("value") method that will display database info on index page on page load and update index page when any database values change.

// Function using moment.js, current time (on page load?), and frequency to calculate next train arrival time

// Function using moment.js, next arrival time, and current time (on page load?) to calculate minutes away