let a = 5;
let b = 6;

const temp = a;
a = b;
b = temp;
console.log(a, b)
//distructuring macanisom.
let x = 5;
let y = 7;
[x, y] = [y, x];
console.log(x, y);