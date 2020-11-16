const takeOrder = (order, orders) => orders.length < 3 ? orders.push(order) : orders;
const refundOrder = (orderNumber, orders) => orders.splice(orderNumber - 1, 1);
const listItems = orders => {
  let result = '';
  orders.forEach((order, index) => index === orders.length - 1 ? result += order.item : result += order.item + ', ');
  return result;
}

const searchOrder = (orders, name) => listItems(orders).includes(name) ? true : false;

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
