const nameMenuItem = menuItemName => `Delicious ${menuItemName}`;
const createMenuItem = (name, price, type) => ({name, price, type});
const addIngredients = (ingredient, ingredients) => !ingredients.includes(ingredient) ? ingredients.push(ingredient) : ingredient;
const formatPrice = price => `$${price}`;

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
