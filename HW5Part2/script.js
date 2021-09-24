let answer = prompt("What is your favorit of the 4 major league sports in the United States?");

// checking to see if the user input MLB and removing the display attribute that hides the image of the MLB logo
if (answer.toLowerCase() == "mlb") {
  document.getElementById('heading').innerHTML = "Your favorite sport is the " + answer.toUpperCase() + "!";
  document.getElementById("MLB_logo").style.display = "block";
}

// checking to see if the user input NFL and removing the display attribute that hides the image of the NFL logo
if (answer.toLowerCase() == "nfl") {
  document.getElementById('heading').innerHTML = "Your favorite sport is the " + answer.toUpperCase() + "!";
  document.getElementById("NFL_logo").style.display = "block";
}

// checking to see if the user input NBA and removing the display attribute that hides the image of the NBA logo
if (answer.toLowerCase() == "nba") {
  document.getElementById('heading').innerHTML = "Your favorite sport is the " + answer.toUpperCase() + "!";
  document.getElementById("NBA_logo").style.display = "block";
}

// checking to see if the user input NHL and removing the display attribute that hides the image of the NHL logo
if (answer.toLowerCase() == "nhl") {
  document.getElementById('heading').innerHTML = "Your favorite sport is the " + answer.toUpperCase() + "!";
  document.getElementById("NHL_logo").style.display = "block";
} else {
  document.getElementById('heading').innerHTML = answer.toUpperCase() + " is not considered a major league sport in the United States!";
}
