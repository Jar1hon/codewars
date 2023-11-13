// // ❓ DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//✅ SOLUTIONS:
function accum(s) {
  s.toLow;
  const arrAccum = s.toLowerCase().split("");
  let newArr = [];
  let newStr = "";
  for (let i = 0; i < arrAccum.length; i++) {
    let rep = arrAccum[i].repeat(i + 1);
    let result = rep.charAt(0).toUpperCase() + rep.slice(1); //ДЕЛАЕТ ПЕРВУЮ ЗАГЛАВНУЮ БУКВУ
    newArr.push(result);
  }
  for (let i = 0; i < newArr.length; i++) {
    if (i > 0) {
      newStr += "-" + newArr[i];
    }
    if (i === 0) {
      newStr += newArr[i];
    }
  }
  return newStr;
}

console.log(accum("ZpglnRxqenU"));
