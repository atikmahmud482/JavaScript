// option 2

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

// option 3
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

//option 4
const violetButton = document.getElementById('make-violet');
violetButton.addEventListener('click', makeViolet);
function makeViolet() {
    document.body.style.backgroundColor = 'violet'
}
//option 4 another
const makeGreenButton = document.getElementById('make-green')
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
})

//option 4 main
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})