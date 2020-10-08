function takeOrder(order, arrOfOrders) {
  arrOfOrders.length < 3 ? arrOfOrders.push(order) : arrOfOrders
}

function refundOrder(orderNumber, arrOfOrders) {
  arrOfOrders.splice(orderNumber - 1, 1);
}

function listItems(arrOfOrders) {
  var result, arrOfItems;
  result = '';

  arrOfItems = arrOfOrders.map(function(element) {
    return element.item;
  });

  arrOfItems.forEach(function(element, index) {
    index === arrOfItems.length - 1 ? result += element : result += element + ', ';
  });

  return result;
}

var input = [
{
  orderNumber: 1,
  item: "burger",
  price: "8.99",
  orderType: "delivery",
  status: "accepted"
},
{
  orderNumber: 2,
  item: "blt sandwich",
  price: "5.99",
  orderType: "delivery",
  status: "accepted"
},
{
  orderNumber: 3,
  item: "rueben",
  price: "8.99",
  orderType: "delivery",
  status: "accepted"
}];
console.log(listItems(input));

function searchOrder() {

}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
