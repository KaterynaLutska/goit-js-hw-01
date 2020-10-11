function reduceArray(array) {
  "use strict";
  let total = 0;
  if (array.length === 0) {
    total = 0;
  }
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  return total;
}

console.log(reduceArray([]));
// 6
