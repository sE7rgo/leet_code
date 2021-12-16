// Given a string s, find the length of the longest substring without repeating characters.
const lengthOfLongestSubstring = (s) => {
  if (!s.length) return 0;
  if (s.length === 1) return 1;
  let array = [];
  let longestLength = 0;
  for (const element of [...s]) {
    if (!array.includes(element)) {
      array.push(element);
    } else {
      if (!longestLength && longestLength < array.length)
        longestLength = array.length;
      array = array.slice(array.indexOf(element) + 1);
      array.push(element);
    }
  }
  return Math.max(longestLength, array.length);
};

console.log(lengthOfLongestSubstring("bbb"));
