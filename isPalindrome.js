function isPalindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');

  let leftPointer = 0;
  let rightPointer = str.length - 1;

  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true;
}

module.exports = isPalindrome;
