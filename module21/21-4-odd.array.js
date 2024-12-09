// function takes an array as parameter . give me the average of the odd numbers in the array.

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(number)
            odds.push(number);
        }
    }
    // console.log(odds)
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    const avg = sum / count;
    return avg;
}
const numbers = [3, 6, 8, 9, 4]
const avg = oddAverage(numbers)
console.log('average of the odd numbers is:', avg);