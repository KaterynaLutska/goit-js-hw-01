/*

Напиши функцию getAllPropValues(arr, prop), 
которая получает массив объектов и имя свойства.

Функция возвращает массив значений определенного свойства 
prop из каждого объекта в массиве.

Используй метод push для добавления значения в массив 
и оператор in для проверки наличия свойства в объекте. */

function getAllPropValues(array, prop) {
  "use strict";
  const arrayProduct = [];
  for (const product of products) {
    if (product[prop] !== undefined) {
      arrayProduct.push(product[prop]);
    }
  }

  return arrayProduct;
}

function getAllPropValues(array, prop) {
  "use strict";
  // Write code under this line
  let message = [];
  for (const object of array) {
    if (prop in object) {
      message.push(object[prop]);
    }
  }

  return message;
}
