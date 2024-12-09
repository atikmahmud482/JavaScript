// const asif = 56;
// const salman = 67;

// if (asif > salman) {
//     console.log('asim will get the cake')
// }
// console.log('salman')

// //useing function 

// function getMax(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     return num2;
// }

// const max = getMax(34, 55);
// console.log(max)
// ////////////////////////////////////

// const jim = 45;
// const kim = 65;
// const min = 34;

// if (jim > kim && jim > min) {
//     console.log("jim is the boss")
// }
// else if (kim > jim && kim > min) {
//     console.log("kim is the boss")

// }
// else {
//     console.log('min is the boss')
// }

function maxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    return num3;
}

const big = maxNumber(23, 45, 2);
console.log(big)

