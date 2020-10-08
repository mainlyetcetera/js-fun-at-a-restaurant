function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
}

nameMenuItem('Burrito');
nameMenuItem('Pizza');
nameMenuItem('Taco');



function createMenuItem(itemName, itemPrice, itemType) {
  return { name : itemName, price : itemPrice, type : itemType };
}

var menuItem = nameMenuItem('French Toast');
console.log(createMenuItem(menuItem, 10.99, "breakfast"));

function addIngredients(ingredient, arrOfIngredients) {
  if (!arrOfIngredients.includes(ingredient)) {
    arrOfIngredients.push(ingredient);
  }
}

function formatPrice(price) {
  return '$' + price;
}

function decreasePrice(price) {
  return price *= .9
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}
