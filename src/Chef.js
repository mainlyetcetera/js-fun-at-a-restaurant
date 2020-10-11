class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, isMorning) {
    if (isMorning) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
    // return isMorning ? `Good morning, ${name}!` : `Hello, ${name}!`
  }

  checkForFood(foodItem) {
    var foodItemType = foodItem.type;
    if (this.restaurant.menus[foodItemType].includes(foodItem)) {
      return `Yes, we're serving ${foodItem.name} today!`;
    } else {
      return `Sorry, we aren't serving ${foodItem.name} today.`;
    }
    // return this.restaurant.menus[foodItemType].includes(foodItem) ? `Yes, we're serving ${foodItem.name} today!` : `Sorry, we aren't serving ${foodItem.name} today.`;
  }

}

module.exports = Chef;
