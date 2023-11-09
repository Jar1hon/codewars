// // ❓ DESCRIPTION:
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//✅ SOLUTIONS:
function century(year) {
  let century;
  if (year >= 0 && year <= 100) {
    century = 1;
  } else if (year >= 101 && year <= 999) {
    if (year % 100 !== 0) {
      century = Number(String(year)[0]) + 1;
    } else if (year % 100 === 0) {
      century = Number(String(year)[0]);
    }
  } else {
    if (year % 100 === 0) {
      century = year / 100;
    } else if (year % 100 !== 0) {
      // const num = year / 100;
      // century = Number(String(year)[0] + String(year)[1]) + 1;
      century = Number(String(year).slice(0, -2)) + 1;
    }
  }
  return century;
}

console.log(century(146001));
