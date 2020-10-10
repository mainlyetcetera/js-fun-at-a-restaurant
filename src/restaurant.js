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

function addMenuItem() {

}

function removeMenuItem() {

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
