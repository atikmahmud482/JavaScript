// 12 inch = 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch ';
    return result;
}

// const shovoHeight = inchToFeet(25);
// console.log(shovoHeight)
const shovoHeight2 = inchToFeet2(25);
console.log(shovoHeight2)