function createRestaurant(restaurantName) {
  return {
    name : restaurantName,
    menus : {
      breakfast : [],
      lunch : [],
      dinner : []
    },
  };
}

function addMenuItem(restaurant, menuItem) {
  var type = menuItem.type;
  if (!restaurant.menus[type].includes(menuItem)) {
    restaurant.menus[type].push(menuItem);
  }
  // restaurant.menus[type].includes(menuItem) ? restaurant.menus[type] : restaurant.menus[type].push(menuItem)  
}

function removeMenuItem() {

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
