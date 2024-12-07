//objective : write  a function to give me the sum of all numbers in an array. 

function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const num = [3, 5, 7, 8, 34];
const sum = sumOfNumbers(num);
console.log('Sum of number is', sum)