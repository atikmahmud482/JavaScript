// function decleration 
//function useability.
//set paramiter.
//function call
//function return
function add(price1, price2) {
    const total = (price1 + price2);
    return total;
}
const bill = add(5, 80);
console.log(bill)

function add2(price1, price2) {
    return price1 + price2;
}
const bill2 = add2(5, 80)
console.log(bill, bill2)

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}
const result = doMath(4, 2);
console.log(result)

//conditional return 

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(5))
console.log(isEven(4))


function isOdd(number) {
    if (number % 2 === 1) {
        return true;
    }
    return false;
}
console.log(isOdd(5))
console.log(isOdd(4))