// // ❓ DESCRIPTION:
// // Given the triangle of consecutive odd numbers:

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// 31    33    35    37    39   41
// 43    45    47    49    51   53  55
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//✅ SOLUTIONS:
function rowSumOddNumbers(n) {
  const firstNum = n * (n - 1) + 1;
  let varNum = 0;
  for (let i = 0; i < n; i++) {
    varNum += 2 * [i];
  }
  return firstNum * n + varNum;
}

console.log(rowSumOddNumbers(42));
