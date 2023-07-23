"use strict";

let basket = {
  product1: {
    name: 'черная икра',
    price: 100, // dollars
    weigth: 100, // grams
    img: 'lib/images/_.jpg', // path
    desc: 'Икра осетровая',
    count: 1,
  },
  product2: {
    name: 'Хлеб',
    price: 1, // dollars
    weigth: 300, // grams
    img: 'lib/images/_.jpg', // path
    desc: 'Батон',
    count: 2,
  },
  product3: {
    name: 'Водка',
    price: 5, // dollars
    weigth: 1000, // grams
    img: 'lib/images/_.jpg', // path
    desc: 'Белуга',
    count: 1,
  },
}

function getBasketSum() {
  let basketSum = 0;

  for (let value in basket) {
    basketSum += basket[value].price * basket[value].count;
  }

  return basketSum;
}

(function fillBasket() {
  
  let table = document.querySelector('.basket');
  let tableHeader = document.createElement('tr');

  for(let key in basket.product1) {
    let tableHeaderColumn = document.createElement('th');
    tableHeaderColumn.innerHTML = key;
    tableHeader.append(tableHeaderColumn);
  }

  table.append(tableHeader);

  for(let basketKey in basket) {
    let product = basket[basketKey];
    let tableRow = document.createElement('tr');
    for(let key in product) {
      let tableColumn = document.createElement('td');
      tableColumn.innerHTML = product[key];
      tableRow.append(tableColumn);
    }
    table.append(tableRow);
  }

  showBasketSum(table);
})()

function showBasketSum(table) {
  table.insertAdjacentHTML("afterEnd", `<span>В корзине товаров на сумму: ${getBasketSum()}</span>`);
}



