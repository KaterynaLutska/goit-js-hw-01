const invoice = 100;
const stock = 100;
let message;
// Write code under this line

if (invoice <= stock) {
  message = "Заказ оформлен, с вами свяжется менеджер";
  console.log(message);
}
if (invoice > stock) {
  message = "На складе недостаточно товаров!";
}

console.log(message);

/// або

const invoice = 100;
const stock = 100;

// Write code under this line
let message;

message =
  invoice <= stock
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно товаров!";

console.log(message);
