var isHappy = function (n, seen = new Set()) {
  if (seen.has(n)) return false;
  seen.add(n);
  const array = Array.from(String(n), Number);
  const sum = array.reduce((a, b) => {
    return a + b ** 2;
  }, 0);
  if (sum === 1) return true;
  return isHappy(sum, seen);
};
console.log(isHappy(19));
