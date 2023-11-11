// ❓ DESCRIPTION:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//✅ SOLUTIONS:
function makeNegative(num) {
  let number = 0;
  if (num > 0) {
    number -= num;
  } else {
    number += num;
  }
  return number;
}
