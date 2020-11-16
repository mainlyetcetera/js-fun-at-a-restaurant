const createRestaurant = name => ({
  name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
  }
});

function addMenuItem(restaurant, menuItem) {
  var type = menuItem.type;
  if (!restaurant.menus[type].includes(menuItem)) {
    restaurant.menus[type].push(menuItem);
  }
  // restaurant.menus[type].includes(menuItem) ? restaurant.menus[type] : restaurant.menus[type].push(menuItem)
}

function removeMenuItem(restaurant, menuItemName, menuItemType) {
  // input restaurant, menu item name, menu type
  // manipulates chosen menu by removing the item IF it is there, also returns an appropriate string
  // if item is not on the menu, return "sorry" string
    // otherwise
    // if the item is there, remove it and return "no one eating" string
  var arrOfItemsByType = restaurant.menus[menuItemType];

  for (var i = 0; i < arrOfItemsByType.length; i++) {
    if (arrOfItemsByType[i].name === menuItemName) {
      arrOfItemsByType.splice(i, 1);
      return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`;
    }
  }
  // var didRemove = false;
  // arrOfItemsByType.forEach(function(element, index) {
  //   if (element.name === menuItemName) {
  //     arrOfItemsByType.splice(index, 1);
  //     didRemove = true;
  //   }
  // });
  //
  // return didRemove ? `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!` : `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
  return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
