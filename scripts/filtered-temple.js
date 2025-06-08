const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;

//store the selected elements for the menu
const mainnav = document.querySelector('.nav');
const hambutton = document.querySelector('#menu');

//add a click event listener to the hamburger button, callback function that toggles the list element's class
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');//this show is the .show in the CSSfile
    hambutton.classList.toggle('show');
});
//The toggle is for instead of separate add new and remove statements, toggle means add the class
//if it is not there, and remove it if it is there.

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Puebla Mexico",
        location: "Puebla, Puebla, Mexico",
        dedicated: "2024, May, 19",
        area: 35865,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26342.jpg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576.jpg"
    }
];
//as i have the temples array's variables already, i think is correct to use the map function to create a new array of HTML strings for each temple card.
function createTempleCard(temple) {
    return `
      <section class="temple-card">
        <h3>${temple.templeName}</h3>
        <p><span class="label">Location:</span> ${temple.location}</p>
        <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
        <p><span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
      </section>
    `;
}

function displayTemples(temples) {
    const container = document.getElementById('temple-cards');
    container.innerHTML = temples.map(createTempleCard).join('');//Map gonna creat a new aray for each temple card
}
displayTemples(temples);

function filterTemples(parameter) {
    let filtered;//hold the filter result
    switch (parameter) { //switch filter by the parameter
        case "old":
            filtered = temples.filter(t => {
                const year = parseInt(t.dedicated.split(",")[0]);
                return year < 1990;
            });
            break;
        case "new":
            filtered = temples.filter(t => {
                const year = parseInt(t.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default: //this is for home, or show all
            filtered = temples;
    }
    displayTemples(filtered);
}

//arrow function () => filterTemples("home") calls the filterTemples function with the parameter home, old, ect
document.getElementById("home").addEventListener("click", () => filterTemples("home"));
document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));

//the video demonstration way:
//createTempleCard();
//
//function createTempleCard() {
//    temples.forEach(temple => {
//        let card = document.createElement('section');
//        let name = document.createElement('h3');
//        let location = document.createElement('p');
//        let dedicated = document.createElement('p');
//        let area = document.createElement('p');
//        let image = document.createElement('img');
//
//        name.textContent = temple.templeName;
//        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
//        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
//        area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft`;
//        image.setAttribute('src', temple.imageUrl);
//        image.setAttribute('alt', `${temple.templeName} Temple`);
//        image.setAttribute('loading', 'lazy')
//
//        card.appendChild(name);
//        card.appendChild(location);
//        card.appendChild(dedicated);
//        card.appendChild(area);
//        card.appendChild(image);
//        document.getElementById('temple-cards').appendChild(card);
//    });
//}