const takeOrder = (order, orders) => {  
  orders.length < 3 ? orders.push(order) : orders;
}

function refundOrder(orderNumber, arrOfOrders) {
  arrOfOrders.splice(orderNumber - 1, 1);
}

function listItems(arrOfOrders) {
  var result, arrOfItems;
  result = '';
  arrOfItems = [];

  for (var i = 0; i < arrOfOrders.length; i++) {
    arrOfItems.push(arrOfOrders[i].item);
  }
  // arrOfItems = arrOfOrders.map(function(element) {
  //   return element.item;
  // });

  for (var j = 0; j < arrOfItems.length; j++) {
    if (j === arrOfItems.length - 1) {
      result += arrOfItems[j];
    } else {
      result += arrOfItems[j] + ', ';
    }
  }
  // arrOfItems.forEach(function(element, index) {
  //   index === arrOfItems.length - 1 ? result += element : result += element + ', ';
  // });

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
