const createRestaurant = name => ({
  name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
  }
});

const addMenuItem = (restaurant, item) => {
  let type = item.type;
  !restaurant.menus[type].includes(item) ? restaurant.menus[type].push(item) : restaurant;
}

const removeMenuItem = (restaurant, name, type) => {
  var itemsByType = restaurant.menus[type];
  for (var i = 0; i < itemsByType.length; i++) {
    if (itemsByType[i].name === name) {
      itemsByType.splice(i, 1);
      return `No one is eating our ${name} - it has been removed from the ${type} menu!`;
    }    
  }

  return `Sorry, we don't sell ${name}, try adding a new recipe!`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
