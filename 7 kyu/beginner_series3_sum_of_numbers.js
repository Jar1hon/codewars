// // ❓ DESCRIPTION:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

//✅ SOLUTIONS:
function getSum(a, b) {
  const arrNum = [a, b];
  arrNum.sort(function (a, b) {
    return a - b;
  });
  // Создаем переменную, конвертируя в массив исходные аргументы
  let arrTotal = [];
  //создаем массив в который будем передавать промежуточные значения
  let total = 0;
  //создаем переменную в которую будем суммировать числа из массива
  for (let i = arrNum[0]; i <= arrNum[1]; i++) {
    arrTotal.push(arrNum[0]++);
  }
  if (a !== b) {
    for (let i = 0; i < arrTotal.length; i++) {
      total += arrTotal[i];
    }
  } else if (a === b) {
    return a;
  }
  return total;
}

console.log(getSum(505, 4));
