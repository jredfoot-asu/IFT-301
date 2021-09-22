let answer = prompt("What is your favorit of the 4 major league sports in the United States?");

if (answer.toLowerCase() == "mlb") {
  document.getElementById('heading').innerHTML = "Your favorite sport is the " + answer.toUpperCase() + "!";
  document.getElementById("MLB_logo").style.display = "block";
}

if (answer.toLowerCase() == "nfl") {
  document.getElementById('heading').innerHTML = "Your favorite sport is the " + answer.toUpperCase() + "!";
  document.getElementById("NFL_logo").style.display = "block";
}

if (answer.toLowerCase() == "nba") {
  document.getElementById('heading').innerHTML = "Your favorite sport is the " + answer.toUpperCase() + "!";
  document.getElementById("NBA_logo").style.display = "block";
}

if (answer.toLowerCase() == "nhl") {
  document.getElementById('heading').innerHTML = "Your favorite sport is the " + answer.toUpperCase() + "!";
  document.getElementById("NHL_logo").style.display = "block";
} else {
  document.getElementById('heading').innerHTML = answer.toUpperCase() + " is not considered a major league sport in the United States!";
}
