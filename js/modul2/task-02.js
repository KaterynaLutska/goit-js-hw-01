const calculateEngravingPrice = function (message = " ", pricePerWord = 0) {
  const result = message.split(" ").length * pricePerWord;
  return result;
};
calculateEngravingPrice("");

/*
Подсчет стоимости гравировки украшений
Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

Для решения этой задачи не используйте циклы. Т.е. никаких for, while, do while, for of, for in, forEach или функциональных методов.