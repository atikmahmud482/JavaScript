//1. Where to add
const placesList = document.getElementById('places-list')
//2. What to be added
const li = document.createElement('li')
li.innerText = 'cox-bazer';
//3. Add the child
placesList.appendChild(li)

const mainContainer = document.getElementById('main-container')
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'My food list';
section.appendChild(h1)

const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText = 'briani'
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'korma'
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'polau'
ul.appendChild(li3);

section.appendChild(ul)


//innerHTML diye add kora .
mainContainer.appendChild(section)

const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
    <h1>My Dress Section </h1>

    <ul>
    <li>LUNGI</li>
    <li>GENJI</li>
    <li>GAMCHA</li>
    </ul>

`
mainContainer.appendChild(sectionDress)