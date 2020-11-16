class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(name, isMorning) {
    return isMorning ? `Good morning, ${name}!` : `Hello, ${name}!`;
  }

  checkForFood(foodItem) {
    let foodItemType = foodItem.type;    
    return this.restaurant.menus[foodItemType].includes(foodItem) ? `Yes, we're serving ${foodItem.name} today!` : `Sorry, we aren't serving ${foodItem.name} today.`;
  }

}

module.exports = Chef;
