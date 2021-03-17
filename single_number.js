var singleNumber = function (nums) {
  return nums.reduce((a, b) => {
    return a ^ b;
  }, 0);
};

console.log(singleNumber([4, 1, 2, 1, 2]));
