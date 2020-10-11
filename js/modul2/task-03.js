const findLongestWord = function (string) {
  let longestWord = "";
  const array = string.split(" ");
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  console.log(longestWord);
  return longestWord;
};

console.log(findLongestWord(""));

/*Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.