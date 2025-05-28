function findNextSquare(sq) {
    const sqrt = Math.sqrt(sq);
    return Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1;
}

console.log(findNextSquare(121))

//https://www.codewars.com/kata/56269eb78ad2e4ced1000013