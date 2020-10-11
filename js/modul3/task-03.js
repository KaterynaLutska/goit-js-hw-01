/*
Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), 
которая принимает объект сотрудников и возвращает имя самого продуктивного 
(который выполнил больше всех задач). Сотрудники и кол-во выполненных задач 
содержатся как свойства объекта в формате "имя":"кол-во задач". */

const findBestEmployee = function (employees) {
  "use strict";
  let bestValue = 0;
  let bestKey = "";

  for (const [key, value] of Object.entries(employees)) {
    if (bestValue < value) {
      bestValue = value;
      bestKey = key;
    }
  }
  return `${bestKey}: ${bestValue}`;
};
