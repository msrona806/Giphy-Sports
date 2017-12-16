// Giphy API Key: CO5Bdmd3pzct7qe3fGGS3tdGFF1biYxa

// code to make script run once page is ready
$(document).ready(function() {

// prevent code to keep the form from reloading when button is clicked.
event.preventDefault();

// variable to hold array of topics
var topics = ["Orlando", "Las Vegas", "San Francisco"];

//Function that will display location gifs
function locationDisplay () {

  //the location buttons will need to be remove before a new button is added, to avoid repetitive buttons
  $("#results").empty();

  //for loop to go thru topics array
  for (var i = 0; i < topics.length; i++) {

  //generate buttons dynamically for each location
  var a = $("<button");
  }
}

// code to create button from items from the  topic array, use a for loop to append topics to button


// on click function to get information from GIPHY (10 gifs). Display in html, not animated
// logic to animate the gif. goes back still when clicked again
// each gif will display its rating
// dynamically create a text input box for user to add to topics array, a new button will be created


});
