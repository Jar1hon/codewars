/* ❓ DESCRIPTION:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false

✅ SOLUTIONS:
*/

function isIsogram(str) {
  const arr = [...str.toLowerCase()];

  let duplicate = 0;

  arr.forEach((el, i, array) => {
    if (array.indexOf(el) !== i) duplicate++;
  });

  return duplicate > 0 ? false : true;
}

console.log(isIsogram("asdfgg"));
