// Giphy API Key: CO5Bdmd3pzct7qe3fGGS3tdGFF1biYxa

// code to make script run once page is ready
$(document).ready(function() {
  
  // variable to hold array of topics
  var topics = ["Orlando", "Las Vegas", "San Francisco"];
  console.log(topics)

  // Function to request giphy images to display when any location button is clicked
  function displayLocationGif () {
    
  }
  // Function that will display location buttons
  function locationDisplay () {
  
    // the location buttons will need to be remove before a new button is added, to avoid repetitive buttons
    $("#results").empty();
  
    // for loop to go thru topics array
    for (var i = 0; i < topics.length; i++) {
  
    // create buttons from items from the topic array, use a for loop to append topics to button
    // generate buttons dynamically for each location
    var a = $("<button>");
    // create a class and add attribute for the value of the topics array
    a.addClass("topic");  
    // add the value entered to the topic array
    a.attr("locations", topics[i]);
    // make the word entered show up on the button
    a.text(topics[i]);
    // create a new button in the HTML
    $("#results").append(a);
    }
  }
  
  // on click event for the travel here button
  $("#add-location").click(function(event) {
  
  // prevent code to keep the form from reloading when button is clicked.
  event.preventDefault();
  
  // get the text from the input box, user entered
  var topic = $("#new-location-input").val().trim();
  
  // the location the user entered is added to topic array
  topics.push(topic);
  
  // call the function created to display gif
  locationDisplay();
  });
  
  // call locationDisplay function to display initial list of locations
  locationDisplay();
  
  });