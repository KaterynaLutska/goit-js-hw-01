const friends = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const getItemsString = function (array) {
  for (let i = 0; i < friends.length; i += 1) {
    numbers.push(`label-${i}`);
  }
};

array();
console.log(i);

/*
Использование for
Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения (конкатенации) строк в формате ${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.

Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

Используйте вспомогательную переменную result для добавления (конкатенации) строк внутри цикла for /