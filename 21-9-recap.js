//Write a function to convert temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    let fahenheit = (celsius * 9 / 2) + 32;
    return fahenheit;
}

let celsiustemp = 25;
let fahenheitTemp = celsiusToFahrenheit(celsiustemp)
console.log(fahenheitTemp)

/*You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0*/

function countOccurrences(number, target) {
    let count = 0;
    for (const num of number) {
        if (num === target) {
            count++;
        }
    }
    return count;
}
let numbers1 = [5, 6, 11, 12, 98, 5];
let target1 = 5;
// console.log({ target1 } { countOccurrences(number1, target1) });
// console.log(target1, number1)
console.log(`The number ${target1} is repeated ${countOccurrences(numbers1, target1)} times.`); // Output: 2



let numbers2 = [5, 6, 11, 12, 98, 5];
let target2 = 25;
// console.log({ target2 } { countOccurrences(number2, target2) });

console.log(`The number ${target2} is repeated ${countOccurrences(numbers2, target2)} times.`); // Output: 0