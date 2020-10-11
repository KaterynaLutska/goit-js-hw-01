function filterArray(array) {
  "use strict";
  let numbers = [];
  for (let i = 0; i < array.length; i += 1)
    if (Number.isFinite(array[i]) === true) {
      numbers.push(array[i]);
    }
  return numbers;
}

/*
Создание нового массива на основе отбора из исходного массива
Напиши функцию filterArray(array), принимающую 1 параметр array - массив. 
Функция проверяет каждое значение массива - является ли значение конечным числом (Number.isFinite). 
Для проверки используй цикл for. Числа добавляются в новый массив numbers с помощью метода push, 
а не числа - игнорируются. 
По завершению проверки массива array возвращается массив numbers.