/*
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
 */

const isPalindrome = (num) => {
  const numArray = [...`${num}`];
  const numArrayReversed = numArray.reverse();
  for (const index in numArrayReversed) {
    if (numArrayReversed[index] !== numArray[numArray.length - 1 - index])
      return false;
  }
  return true;
};

isPalindrome(121);
