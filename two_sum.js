const nums = [3, 3];
const target = 6;

const twoSum = function (nums, target) {
  let output = [];
  for (indA in nums) {
    for (indB in nums) {
      if (nums[indB] + nums[indA] === target && indA !== indB) {
        return (output = [indA, indB]);
      }
    }
  }
  return output;
};

console.log(twoSum(nums, target));
