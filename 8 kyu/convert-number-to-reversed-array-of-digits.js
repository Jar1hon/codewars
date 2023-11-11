// ❓ DESCRIPTION:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//✅ SOLUTIONS:
function digitize(n) {
  const strN = String(n);
  const arr = [];
  for (let i = 0; i < strN.length; i++) {
    arr.unshift(Number(strN[i]));
  }
  return arr;
}

console.log(digitize(35231));
