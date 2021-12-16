const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

const addTwoNumbers = function (l1, l2) {
  let num = 0;
  for (let idx in l1) {
    num = num + (10 ** l1.length - 1) * l1[idx];
  }
  return num;
};

console.log(addTwoNumbers(l1, l2));
