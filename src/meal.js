const nameMenuItem = menuItemName => `Delicious ${menuItemName}`;
const createMenuItem = (name, price, type) => ({name, price, type});

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
