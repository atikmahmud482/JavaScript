const height = [45, 64, 23, 6, 34, 22, 77];
function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num < max) {
            max = num;
        }
    }
    return max;
}
const max = getMax(height)
console.log('Max value is :', max)