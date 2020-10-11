/*
Форматирование строки в зависимости от длинны строки
Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию */

function formatString(string, maxLength = 40) {
  let allString = " ";
  allString = string.length;
  if (string.length <= maxLength) {
    return string;
  } else {
    allString = string.slice(0, maxLength) + `...`;
    return allString;
  }
}

console.log(
  formatString(
    "Катя, але і без того було б. Але вона не здається і йде далі, бо вона - наш лідер."
  )
);
