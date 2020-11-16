const takeOrder = (order, orders) => orders.length < 3 ? orders.push(order) : orders;
const refundOrder = (orderNumber, orders) => orders.splice(orderNumber - 1, 1);
const listItems = orders => {
  let result = '', items = [];

  for (let i = 0; i < orders.length; i++) {
    items.push(orders[i].item);
  }

  for (let j = 0; j < orders.length; j++) {    
    j === items.length - 1 ? result += items[j] : result += items[j] + ', ';
  }

  return result;
}

const searchOrder = (orders, name) => listItems(orders).includes(name) ? true : false;

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
