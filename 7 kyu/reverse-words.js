// // ❓ DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//✅ SOLUTIONS:
function reverseWords(str) {
  const rev = str.split("").reduce((x, y) => y + x);
  const arr = rev.split(" ");
  let fakeArr = [];
  for (let i = 0; i < arr.length; i++) {
    fakeArr.unshift(arr[i]);
  }
  return fakeArr.join(" ");
}

console.log(reverseWords("double  spaced  words"));
