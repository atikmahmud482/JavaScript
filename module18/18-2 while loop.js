// const number = 7;
// if (number < 9) {
//     console.log('ekta number paichi');
// }
// console.log('Something new is cooking');


// let num = 0;
// while (num < 5) {
//     console.log('loooooping', num);
//     // num = num + 1;
//     num++;
// }


//decremental loop

// let n = 10;
// while (n >= 0) {
//     console.log(n);
//     n--;
// }

//Write a loop 1 to 200. Use break to exit the loop once you find 100.

let n = 1;
while (n <= 200) {
    console.log(n);
    if (n === 100) {
        console.log("found 100, exiting the loop.");
        break;

    }
    n++;
}