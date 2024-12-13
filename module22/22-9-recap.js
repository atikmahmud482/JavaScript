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



//Problem-01 : Help The Zoo Manager
// ⚠️ Function Name Must be calculateMoney( )

// বাকে র ভাই মি রপুর চি ড়ি য়াখানার ম্যানে জার । প্রতি দি ন তাকে অসংখ্য টি কে ট বি ক্রি করতে হয় । টাকার হি সে ব এ
// তি নি সবসময় গড়মি ল বাধি য়ে ফে লে ন । তুমি যে হে তুসদ্য ডে ভে ল োপার হচ্ছ ো বাকে র ভাই ত োমার কাছে একটি
// হে ল্প চে য়ে ছে । বাকে র ভাই কে calculateMoney( ) নামে একটি ফাংশন বানি য়ে দি তে হবে যাকে প্রতি দি ন
// টি কে ট সে ল করার সংখ্যা ইনপুট দি লে সে সকল খরচ বাদ দি য়ে ম োট কত টাকা বাকে র ভাইর কাছে থাকে তা বলে
// দি তে পারে ।

// চি ড়ি য়াখানায় প্রতি টি কে ট বি ক্রি হয় ১২০ টাকায় । আর ব্যয় এর মধ্যে প্রতি দি ন ১ জন দার োয়ান কে দি তে হয় ৫০০
// টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করান োর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে ।

// Input :
// ফাংশন টি ইনপুট নে বে টি কে ট সে ল করার সংখ্যা । ইনপুট হবে একটি পজি টি ভ সংখ্যা । (0<=Input)

// Output :
// টি কে টে র আয় ও ব্যয় গুল ো ক্যালকুলে ট করে বাকী কত টাকা বাকে র ভাইর কাছে থাকল ো সে টা ই ত োমার
// ফাংশন আউটপুট হি সে বে রি টার্ন করবে । আউটপুট পজি টি ভ নে গে টি ভ যে ক োন কি ছুই হতে পারে ।
// 💡যে মন ইনপুট যদি 10 হয় তাহলে আউটপুট হবে ( 10 * 120) - ( 500 + (8 * 50) ) = 300

// Challenge 📢 : বাকে র ভাই যদি ইনপুট হি সে বে নে গে টি ভ সংখ্যা দে য় তাহলে ত োমাকে একটা error ম্যাসে জ
// আউটপুট হি সে বে রি টার্ন করে দি তে হবে ।

function calculateMoney(ticketSales) {
    // Validate input
    if (ticketSales < 0) {
        return "Error: Ticket sales cannot be a negative number.";
    }

    // Constants
    const ticketPrice = 120; // Price per ticket
    const guardCost = 500;   // Cost for one guard per day
    const staffCount = 8;    // Number of staff
    const staffLunchCost = 50; // Cost for lunch per staff

    // Calculate income and expenses
    const income = ticketSales * ticketPrice;
    const expenses = guardCost + (staffCount * staffLunchCost);

    // Calculate remaining money
    const remainingMoney = income - expenses;

    return remainingMoney;
}

// Example usage
console.log(calculateMoney(10)); // Input: 10 tickets sold
console.log(calculateMoney(-5)); // Input: Invalid negative number

// Problem-02: Good Name , Bad Name
// ⚠️ Function Name Must be checkName

// সালমান ভাই ও রাশে দা ভাবীর ক োল জুড়ে এসে ছে একটা পুত্র সন্তান । সালমান ভাই পুত্র সন্তানে র একটা ভাল ো নাম
// রাখতে চান । কি ন্তু তাদে র এলাকায় গ্রামে র মানষু রা নাম কে ব্যাংগ করে উচ্চারন করে । যে মন কার ো নাম salman
// হলে তারা বলে সালমাইন্যা । কার ো নাম jafor হলে তারা বলে জাফইর্যা । সালমান ভাই চান না তার পুত্র সন্তান কে
// কে উ এভাবে ক্ষে পাক ।
// সালমান ভাই দে খতে পে লে ন যে যাদে র নামে র শে ষে a, y, i , e , o , u, w থাকে তাদে র কে আসলে ক্ষে পান ো
// যায় না । যমন Tonoy, utsho , Roide, shanto এসব ধরনে র নাম গুল ো কে ব্যাংগ করে উচ্চারন করা যায় না ।

// এখন ত োমাকে সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লি খে দি তে হবে । যে টা একটা স্ট্রি ং
// ইনপুট নে বে । এবং ফাংশন টি চে ক করে দে খবে নাম টি রাখা ভাল ো হবে না খারাপ হবে । ভাল ো হলে সে রি টার্ন
// করবে Good Name আর নাম টি খারাপ হলে রি টার্ন করবে Bad Name

// Input : ত োমার ফাংশন টি ইনপুট নে বে একটি নাম । ইনপুট টি হবে একটি স্ট্রি ং । যে খানে character গুল ো
// ছ োট হাতে র বা বড় হাতে র হতে পারে ।

// Output : ফাংশন টি আউটপুট হি সে বে রি টার্ন করবে একটি স্ট্রি ং । যার ভ্যালুহবে Good Name অথবা Bad
// Name

// Challenge 📢 : ইনপুট হি সে বে স্ট্রি ং টাইপে র বাইরে অন্য যে ক োন কি ছুদি লে এটা শুধুমাত্র “invalid” রি টার্ন
// করবে ।
function checkName(name) {
    // Validate input
    if (typeof name !== "string") {
        return "invalid";
    }

    // Normalize the name to lowercase for consistency
    const lowerCaseName = name.toLowerCase();

    // List of safe ending characters
    const safeEndings = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    // Check if the name ends with a safe character
    const lastChar = lowerCaseName[lowerCaseName.length - 1];
    if (safeEndings.includes(lastChar)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

// Example usage
console.log(checkName("Salman")); // Output: Bad Name
console.log(checkName("Tonoy"));  // Output: Good Name
console.log(checkName("Utsho"));  // Output: Good Name
console.log(checkName(123));      // Output: invalid
console.log(checkName("Jafor"));  // Output: Bad Name
