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