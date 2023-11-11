// // ❓ DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//✅ SOLUTIONS:

function longest(s1 = "", s2 = "") {
  const concat = String(s1) + String(s2);
  let totalArr = [];
  for (let i = 0; i < concat.length; i++) {
    if (concat[i] !== totalArr) {
      totalArr.push(concat[i]);
    }
  }
  totalArr.sort();
  const uniqSet = new Set(totalArr);
  const setArr = [...uniqSet];
  return setArr.join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
