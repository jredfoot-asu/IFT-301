// Creating the header for the first card.
let character1 = document.createElement("h1");
// Adding the image for the first card.
let image1 = document.createElement("img");
image1.src = 'superman.jpg';
character1.innerHTML = 'Superman';
document.getElementById('card1').appendChild(character1);
// creating a table to display the characters height, Weakness, and power level.
let superman_table = document.createElement('table');
let superman_row1 = document.createElement('tr');
let s_height = document.createElement('th');
s_height.innerHTML = 'Height';
let s_weakness = document.createElement('th');
s_weakness.innerHTML = 'Weakness';
let s_level = document.createElement('th');
s_level.innerHTML = 'Level'
superman_table.appendChild(superman_row1)
superman_row1.appendChild(s_height);
superman_row1.appendChild(s_weakness);
superman_row1.appendChild(s_level);
let superman_row2 = document.createElement('tr');
superman_table.appendChild(superman_row2)
document.getElementById('card1').appendChild(superman_table);
let superman_height = document.createElement('td');
superman_height.innerHTML = `6' 3"`;
let superman_weakness = document.createElement('td');
superman_weakness.innerHTML = 'Kryptonite';
let superman_level = document.createElement('td');
superman_level.innerHTML = '99';
superman_row2.appendChild(superman_height);
superman_row2.appendChild(superman_weakness);
superman_row2.appendChild(superman_level);
document.getElementById('card1').appendChild(image1);
// creating the paragraph that describes the character.
let superman_description = document.createElement('p');
superman_description.innerHTML = `Superman is a superhero who first appeared in American comic books published by DC Comics. He was found and adopted by farmers Jonathan and Martha Kent, who named him Clark Kent. Clark developed various superhuman abilities, such as incredible strength and impervious skin.`;
document.getElementById('card1').appendChild(superman_description);

// Creating the header for the second card.
let character2 = document.createElement("h1");
// Adding the image for the second card.
let image2 = document.createElement("img");
image2.src = 'batman.jpeg';
character2.innerHTML = 'Batman';
document.getElementById('card2').appendChild(character2);
// creating a table to display the characters height, Weakness, and power level.
let batman_table = document.createElement('table');
let batman_row1 = document.createElement('tr');
let b_height = document.createElement('th');
b_height.innerHTML = 'Height';
let b_weakness = document.createElement('th');
b_weakness.innerHTML = 'Weakness';
let b_level = document.createElement('th');
b_level.innerHTML = 'Level'
batman_table.appendChild(batman_row1)
batman_row1.appendChild(b_height);
batman_row1.appendChild(b_weakness);
batman_row1.appendChild(b_level);
let batman_row2 = document.createElement('tr');
batman_table.appendChild(batman_row2)
document.getElementById('card2').appendChild(batman_table);
let batman_height = document.createElement('td');
batman_height.innerHTML = `6' 2"`;
let batman_weakness = document.createElement('td');
batman_weakness.innerHTML = 'Bullets';
let batman_level = document.createElement('td');
batman_level.innerHTML = '82';
batman_row2.appendChild(batman_height);
batman_row2.appendChild(batman_weakness);
batman_row2.appendChild(batman_level);
document.getElementById('card2').appendChild(image2);
// creating the paragraph that describes the character.
let batman_description = document.createElement('p');
batman_description.innerHTML = `Batman is the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a bat who fights against evil and strikes fear into the hearts of criminals everywhere. In his public identity he is Bruce Wayne, billionaire industrialist and notorious playboy.`;
document.getElementById('card2').appendChild(batman_description);


// Creating the header for the third card.
let character3 = document.createElement("h1");
// Adding the image for the third card.
let image3 = document.createElement("img");
image3.src = 'wonderwoman.jpeg';
character3.innerHTML = 'Wonder Woman';
document.getElementById('card3').appendChild(character3);
// creating a table to display the characters height, Weakness, and power level.
let ww_table = document.createElement('table');
let ww_row1 = document.createElement('tr');
let ww_height = document.createElement('th');
ww_height.innerHTML = 'Height';
let ww_weakness = document.createElement('th');
ww_weakness.innerHTML = 'Weakness';
let ww_level = document.createElement('th');
ww_level.innerHTML = 'Level'
ww_table.appendChild(ww_row1)
ww_row1.appendChild(ww_height);
ww_row1.appendChild(ww_weakness);
ww_row1.appendChild(ww_level);
let ww_row2 = document.createElement('tr');
ww_table.appendChild(ww_row2)
document.getElementById('card3').appendChild(ww_table);
let wonder_height = document.createElement('td');
wonder_height.innerHTML = `5' 10"`;
let wonder_weakness = document.createElement('td');
wonder_weakness.innerHTML = 'Bracelets of Submission';
let wonder_level = document.createElement('td');
wonder_level.innerHTML = '93';
ww_row2.appendChild(wonder_height);
ww_row2.appendChild(wonder_weakness);
ww_row2.appendChild(wonder_level);
document.getElementById('card3').appendChild(image3);
// creating the paragraph that describes the character.
let wonder_woman_description = document.createElement('p');
wonder_woman_description.innerHTML = `Wonder Woman is a compassionate caring, stubborn, opinionated, highly competitive, outgoing, immortal Amazon. Wonder Woman is a warrior born. She tries to avoid conflict but if pressed she will engage in battle and on occasion lose herself in the pleasure of battle.`;
document.getElementById('card3').appendChild(wonder_woman_description);
