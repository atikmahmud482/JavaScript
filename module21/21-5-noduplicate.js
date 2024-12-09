const brianiKhor = ['abul', 'babul', 'kabul', 'abul', 'cabul', 'babul'];
const numbers = [2, 5, 6, 3, 6, 2, 6, 4];


function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;

}

const uniqueArray = noDuplicate(brianiKhor);
console.log(uniqueArray);