// 1. Those year that is not divisible by 100 and if the year is divisible by 4. then it will be a leap year.
// if the year is divisible by 400 , then it is a leap year.
// else it is not a leap year.


/* solved */

function lipiYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    return false;
}

const lipi = lipiYear(2100);
const lipi2 = lipiYear(2400);
const lipi3 = lipiYear(1900);
const lipi4 = lipiYear(2052);

console.log(lipi, lipi2, lipi3, lipi4)