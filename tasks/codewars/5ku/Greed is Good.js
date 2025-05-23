function score(dice) {
  const sortedDice = [...dice].sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < sortedDice.length; i++) {
    const firstEl = sortedDice[i];
    const threeElArr = sortedDice.slice(i, i + 3);
    const isThreeEl =
      threeElArr.length === 3 && threeElArr.every((el) => el === firstEl);

    if (isThreeEl) {
      if (firstEl === 1) {
        result += 1000;
      } else {
        result += firstEl * 100;
      }

      i += 2;
      continue;
    }

    if (firstEl === 1 || firstEl === 5) {
      if (firstEl === 1) result += 100;
      if (firstEl === 5) result += 50;
    }
  }

  return result;
}

console.log(score([1, 5, 5, 4, 5]));

//https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
