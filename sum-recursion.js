function sum(fromN, toN) {
  let sum1 = 0;
  if (fromN === toN) return sum1;
  sum1 = fromN + fromN + 1;
  sum(fromN + 1, toN);
}
console.log(sum(3, 7));
