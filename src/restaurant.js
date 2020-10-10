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
  restaurant.menus.lunch.push(menuItem);
}

function removeMenuItem() {

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
