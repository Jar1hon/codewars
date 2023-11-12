// // ❓ DESCRIPTION:
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//✅ SOLUTIONS:
function getCount(str) {
  let total = 0;
  const arrStr = str.split("");
  for (let i = 0; i < arrStr.length; i++) {
    if (
      arrStr[i] === "a" ||
      arrStr[i] === "e" ||
      arrStr[i] === "i" ||
      arrStr[i] === "o" ||
      arrStr[i] === "u"
    )
      total += 1;
  }
  return total;
}

console.log(getCount("abracadabra"));
