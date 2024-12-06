// for (let i = 0; i < 15; i++) {
//     console.log(i);
//     if (i >= 5) {
//         break;
//     }
// }


// let n = 54;
// while (n > 25) {
//     console.log(n);
//     if (n < 50) {
//         break;
//     }
//     n--;
// }


//  ----display odd number from 55 to 85 and skip the numbers divisible by 5.-------//
for (let i = 55; i <= 85; i++) {
    if (i % 2 !== 1) { // Skip even numbers
        continue;
    }
    if (i % 5 === 0) { // Skip numbers divisible by 5
        continue;
    }
    console.log(i); // Display odd numbers that are not divisible by 5
}

