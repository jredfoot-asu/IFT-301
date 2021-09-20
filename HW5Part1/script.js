let ingredients = ["2 lb ground beef", "1/2 onion, chopped", "1 tbsp oil", "2 15 oz can tomatoes", "1 6 oz can tomato paste", "1 4 oz can green chilis", "1 tsp cumin powder", "1/4 tsp chili powder", "1 tsp salt", "1 tsp black pepper", "1/2 cup cheddar cheese, shredded", "1 avocado, cubed"];

var table = document.getElementById('ingredients');

for (var i in ingredients) {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML += ingredients[i];

}
