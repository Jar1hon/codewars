// // ❓ DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

//✅ SOLUTIONS:
function findShort(s) {
  let arrShort = s.split(" ", s.length);
  let shorts = s.length;
  for (let i = 0; i < arrShort.length; i++) {
    if (arrShort[i].length < shorts) {
      shorts = arrShort[i].length;
    }
  }
  return shorts;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
