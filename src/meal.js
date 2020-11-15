const nameMenuItem = menuItemName => `Delicious ${menuItemName}`;
const createMenuItem = (name, price, type) => ({name, price, type});
const addIngredients = (ingredient, ingredients) => {
  if (!ingredients.includes(ingredient)) {
    ingredients.push(ingredient);
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
