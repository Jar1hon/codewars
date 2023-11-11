// // ❓ DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//✅ SOLUTIONS:
const binaryArrayToNumber = (arr) => {
  const revArr = arr.reverse();
  let fromBinar = 0;
  for (let i = 0; i < revArr.length; i++) {
    fromBinar += revArr[i] * 2 ** [i];
  }
  return fromBinar;
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));
