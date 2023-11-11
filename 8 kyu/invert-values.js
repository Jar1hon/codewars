// // ❓ DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//✅ SOLUTIONS:
function invert(array) {
  let total = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      total.push(0 - array[i]);
    } else if (array[i] < 0) {
      total.push(0 - array[i]);
    } else if (array[i] === 0) {
      total.push(0);
    }
  }
  return total;
}

console.log(invert([1, -2, 3, -4, 5]));
