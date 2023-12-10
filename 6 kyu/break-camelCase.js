/* ❓ DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

✅ SOLUTIONS:
*/

function solution(string) {
  let str = "";
  const arr = string.split("");
  const arrUpper = string.toUpperCase().split("");
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arrUpper[i]) {
      str += arr[i];
    } else {
      str += " " + arr[i];
    }
  }
  return str;
}

console.log(solution("camelCasing"));
