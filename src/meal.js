function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
}

nameMenuItem('Burrito');
nameMenuItem('Pizza');
nameMenuItem('Taco');



function createMenuItem(itemName, itemPrice, itemType) {
  return { name : nameMenuItem(itemName), price : itemPrice, type : itemType };
}

// var menuItem = nameMenuItem('French Toast');
console.log(createMenuItem('French Toast', 10.99, "breakfast"));



module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
