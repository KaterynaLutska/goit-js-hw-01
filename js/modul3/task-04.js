/*
Суммирование значений свойств объекта
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
Функция считает общую сумму зарплаты работников и возвращает ее. 
Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

const countTotalSalary = function (employees) {
  "use strict";
  let totalSalary = 0;
  for (const value of Object.values(employees)) {
    totalSalary = totalSalary += value;
  }
  return totalSalary;

  // Write code under this line
};
