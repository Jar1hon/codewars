function findNeedle(haystack) {
  const position = haystack.indexOf("needle");
  const text = `found the needle at position ${position}`;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") return text;
  }
}

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
