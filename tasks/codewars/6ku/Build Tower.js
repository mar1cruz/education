function towerBuilder(nFloors) {
    const tower = []

    for (let i = 1; i <= nFloors; i++) {
        const count = (2 * i) - 1
        const indent = ((2 * nFloors - 1) - count) / 2
        const stars = '*'.repeat(count);
        const spaces = ' '.repeat(indent);

        tower.push(spaces + stars + spaces);
    }

    return tower
}

console.log(towerBuilder(3))

//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript