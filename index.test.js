const fishBash = require('./fishBash');
const sortingInterger = require('./sortingInterger');
const isPalindrome = require('./isPalindrome');

describe('Fishbash function', () => {
  test('Should print "fish" if divisible by 3, print "bash" if divisible by 5, print "fishbash" if divisible by 15', () => {
    fishBash(15);
  });
});

describe('Sorting from small to large and large to small', () => {
  test('Should pring sorted number from small to large and then large to small', () => {
    sortingInterger([5, 7, 2, 9, 1, 8]);
  });
});

describe('Return true if the string is reversed and remains the same as the input string, otherwise it returns false', () => {
  test('Should return true is reversed string same with initial string, otherwise return false', () => {
    expect(isPalindrome('Katak')).toEqual(true);
  });
});
