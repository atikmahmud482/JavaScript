// create a function that will return only the even numbers
// return the sum of even numbers

function evenNumbersOnly(numbers) {
    const evens = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            // console.log(number)
            evens.push(number)
        }

    }
    return evens;
}
const number = [2, 6, 4, 8, 4, 5, 6, 1, 9]
// const evens = evenNumbersOnly(number);
// console.log('even numbers are:', evens)

function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {

        if (number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const numbs = [4, 2, 1, 6];
const sum = sumOfEvenNumbers(numbs)
console.log('total sum:', sum)