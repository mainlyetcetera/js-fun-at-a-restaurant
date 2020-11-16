class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, isMorning) {    
    return isMorning ? `Good morning, ${name}!` : `Hello, ${name}!`;
  }

  checkForFood(foodItem) {
    var foodItemType = foodItem.type;
    if (this.restaurant.menus[foodItemType].includes(foodItem)) {
      return `Yes, we're serving ${foodItem.name} today!`;
    } else {
      return `Sorry, we aren't serving ${foodItem.name} today.`;
    }

  }

}

module.exports = Chef;
