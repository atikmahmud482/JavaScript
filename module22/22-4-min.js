const prices = [2000, 1600, 5000, 10000, 20000];

function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const cheap = getMin(prices)
console.log(cheap)