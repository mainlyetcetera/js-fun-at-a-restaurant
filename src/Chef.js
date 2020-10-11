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
}

module.exports = Chef;
