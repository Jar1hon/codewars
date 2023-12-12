/* ❓ DESCRIPTION:
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

✅ SOLUTIONS:
*/

function expandedForm(num) {
  const totalArr = [];
  const arrNum = [...`${num}`];
  arrNum.forEach((element, i, arr) => {
    totalArr.push(Number(element.padEnd(arr.length - i, 0)));
  });
  console.log(totalArr);
  return totalArr.filter((el) => el > 0).join(" + ");
}

console.log(expandedForm(70304));
