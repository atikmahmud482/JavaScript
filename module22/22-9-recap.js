///variable
///condition
///array
///object
///loop
///function

1.//Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const heights2 = [167, 190, 120, 165, 137];

// Using Math.min with the spread operator
const lowest = Math.min(...heights2);

console.log("The lowest number is:", lowest);

2.//Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// Finding the friend with the smallest name
let smallestName = friends[0];

for (let i = 1; i < friends.length; i++) {
    if (friends[i].length < smallestName.length) {
        smallestName = friends[i];
    }
}

console.log("The friend with the smallest name is:", smallestName);




function calculateElectronicsBudget(laptops, tablets, mobiles) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    // Calculating the total budget
    const totalBudget = (laptops * laptopPrice) + (tablets * tabletPrice) + (mobiles * mobilePrice);

    return totalBudget;
}

// Example usage
// const total = calculateElectronicsBudget(2, 1, 3); // 2 laptops, 1 tablet, 3 mobiles
// console.log("Total budget required:", total);
function calculateElectronicsBudget(laptops, tablets, mobiles) {
    // Prices of each item
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    // Calculating the total budget
    const totalBudget = (laptops * laptopPrice) + (tablets * tabletPrice) + (mobiles * mobilePrice);

    return totalBudget;
}

// Example usage
const total = calculateElectronicsBudget(2, 1, 3); // 2 laptops, 1 tablet, 3 mobiles
console.log("Total budget required:", total);



