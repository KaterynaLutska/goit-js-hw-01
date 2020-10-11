let total = 0;

do {
  let input = prompt("Введи число");
  if (input === null) {
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    console.log("Було введено некоректні дані");
    continue;
  }

  total += input;
} while (true);

console.log(`Загальна сума ${total}`);
