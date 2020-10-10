function createRestaurant(restaurant) {
  return {
    name : restaurant,
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
