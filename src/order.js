function takeOrder(order, arrOfOrders) {
  arrOfOrders.length < 3 ? arrOfOrders.push(order) : arrOfOrders
}

function refundOrder(orderNumber, arrOfOrders) {
  arrOfOrders.splice(orderNumber - 1, 1);
}

function listItems() {

}

function searchOrder() {

}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
