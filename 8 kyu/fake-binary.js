// ❓ DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

//✅ SOLUTIONS:
function fakeBin(x) {
  const arrBin = x.split("");
  let bin = "";
  for (let i = 0; i < arrBin.length; i++) {
    if (Number(arrBin[i]) < 5) {
      bin += "0";
    } else if (Number(arrBin[i]) >= 5) {
      bin += "1";
    }
  }
  return bin;
}

console.log(fakeBin("45385593107843568"));
