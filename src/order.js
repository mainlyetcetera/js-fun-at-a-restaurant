const takeOrder = (order, orders) => orders.length < 3 ? orders.push(order) : orders;
const refundOrder = (orderNumber, orders) => orders.splice(orderNumber - 1, 1);
const listItems = orders => {
  var result, arrOfItems;
  result = '';
  arrOfItems = [];

  for (var i = 0; i < orders.length; i++) {
    arrOfItems.push(orders[i].item);
  }

  for (var j = 0; j < orders.length; j++) {
    if (j === arrOfItems.length - 1) {
      result += arrOfItems[j];
    } else {
      result += arrOfItems[j] + ', ';
    }
  }

  return result;
}

function searchOrder(arrOfOrders, orderName) {
  if (listItems(arrOfOrders).includes(orderName)) {
    return true;
  } else {
    return false;
  }
  // return listItems(arrOfOrders).includes(orderName) ? true : false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
