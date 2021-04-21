// write the function isAnagram
export const isAnagram = (test, original) =>
  Object.is(test.toLowerCase(), original.toLowerCase().split('').sort().join(''));
  