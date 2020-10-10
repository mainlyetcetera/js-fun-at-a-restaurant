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
  restaurant.menus[type].push(menuItem);
}

function removeMenuItem() {

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
