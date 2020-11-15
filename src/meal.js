const nameMenuItem = menuItemName => `Delicious ${menuItemName}`;
const createMenuItem = (name, price, type) => ({name, price, type});
const addIngredients = (ingredient, ingredients) => !ingredients.includes(ingredient) ? ingredients.push(ingredient) : ingredient;
const formatPrice = price => `$${price}`;
const decreasePrice = price => price *= .9;
const createRecipe = (title, ingredients, type) => ({title, ingredients, type});

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
