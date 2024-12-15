const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = "2px solid red";
    section.style.marginBottom = '5px'
    section.style.padding = '5px'
    // section.style.backgroundColor = 'lightgray'

}

const places = document.getElementById('places-container');

places.style.backgroundColor = 'black'

const headers = document.getElementsByClassName('headers-title');

headers.style.backgroundColor = 'black'
