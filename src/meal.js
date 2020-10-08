function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
}

function createMenuItem(itemName, itemPrice, itemType) {
  return { name : itemName, price : itemPrice, type : itemType };
}

function addIngredients(ingredient, arrOfIngredients) {
  if (!arrOfIngredients.includes(ingredient)) {
    arrOfIngredients.push(ingredient);
  }
}

function formatPrice(price) {
  return '$' + price;
}

function decreasePrice(price) {
  return price *= .9;
}

function createRecipe(menuItemTitle, menuItemIngredients, menuItemType) {
  return { title : menuItemTitle, ingredients : menuItemIngredients, type : menuItemType };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
