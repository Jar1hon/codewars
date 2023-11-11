// ❓ DESCRIPTION:
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

//✅ SOLUTIONS:
function check(a, x) {
  let match = 0;
  for (let i = 0; i < a.length; i++) {
    if (x === a[i]) match += 1;
  }
  if (match > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(check(["what", "a", "great", "kata"], "kat"));
