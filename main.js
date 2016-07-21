'use strict';
function printOddsSum(inputs) {
    const oddsSum = inputs.filter(input=>input % 2 === 1)
        .map(odd=>odd * odd)
        .reduce((prv, next)=>prv + next);
    console.log(oddsSum);
}
function buildOdds(inputs) {
    const odds = [];
    for (const i of inputs) {
        if (i % 2 != 0) {
            odds.push(i);
        }
    }
    return odds;
}
function buildSquare(odds) {
    return odds.map(odd=> odd * odd);
}
function buildSum(squares) {
    let sum = 0;
    for (const square of squares) {
        sum += square;
    }
    return sum;
}

module.exports = {
    printOddsSum: printOddsSum,
    buildOdds: buildOdds,
    buildSquare: buildSquare,
    buildSum: buildSum
};