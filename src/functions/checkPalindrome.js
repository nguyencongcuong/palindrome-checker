/**
 * PALINDROME CHECKER
 * Check whether or not the string is a Palindrome
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 * @param {String} str The string to check
 * @return {Boolean}
 * @example
 * checkPalindrome("A man, a plan, a canal. Panama") should return true
 * checkPalindrome("My age is 0, 0 si ega ym.") should return true
 * checkPalindrome("five|\_/|four") should return false
 * checkPalindrome("0_0 (: /-\ :) 0-0") should return true
 */

export function checkPalindrome(str) {

  let string = str.slice();
  let regex = new RegExp(/\W|_/, "g");
  let set1 = string.replace(regex, "").toLowerCase().split("");
  let set2 = set1.slice().reverse();

  function isEqual(arrayA, arrayB) {
    return Array.isArray(arrayA) &&
      Array.isArray(arrayB) &&
      arrayA.length === arrayB.length &&
      arrayA.every((val, index) => val === arrayB[index]);
  }

  // console.log(set1);
  // console.log(set2);
  // console.log(isEqual(set1, set2));

  return isEqual(set1, set2);
}