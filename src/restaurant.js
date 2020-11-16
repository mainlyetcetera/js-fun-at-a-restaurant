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
  let isRemoved = false, removedItem;
  itemsByType.forEach((item, i) => item.name === name ? (removedItem = item, itemsByType.splice(i, 1), isRemoved = true) : itemsByType);
  return isRemoved ? `No one is eating our ${removedItem.name} - it has been removed from the ${removedItem.type} menu!` : `Sorry, we don't sell ${name}, try adding a new recipe!`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
