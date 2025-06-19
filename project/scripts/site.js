//Year
const year = document.querySelector("#currentYear");
const today = new Date();
if (year) {
    year.innerHTML = `${today.getFullYear()}`;
}

const lastMod = document.getElementById("lastModified");
if (lastMod) {
    lastMod.innerHTML = document.lastModified;
}

// Hamburger menu
const mainnav = document.querySelector('.nav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

//Local Storage for visits. DOM Interaction. For index.html
function countVisits() {
    if (window.location.pathname.endsWith("index.html")) {
        let visits = Number(localStorage.getItem("visits")) || 0;
        visits++;
        localStorage.setItem("visits", visits);

        // Display the visit count in the footer
        const footer = document.querySelector("footer");
        if (footer) {
            let visitMsg = document.getElementById("visitMsg");
            if (!visitMsg) {
                visitMsg = document.createElement("p");
                visitMsg.id = "visitMsg";
                footer.appendChild(visitMsg);
            }
            visitMsg.textContent = `You have visited this page ${visits} time(s).`;
        }
    }
}
document.addEventListener("DOMContentLoaded", countVisits);

//Conditional for greeting in index.html
function greetUser() {
    if (!window.location.pathname.endsWith("index.html")) return;

    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 12) {
        greeting = "Good morning! Welcome to Your High Vibes Path";
    } else if (hour < 18) {
        greeting = "Good afternoon! Welcome to Your High Vibes Path";
    } else {
        greeting = "Good evening! Welcome to Your High Vibes Path";
    }
    const heroH1 = document.querySelector(".herodiv h1");
    if (heroH1) {
        heroH1.textContent = greeting;
    }
}

document.addEventListener("DOMContentLoaded", greetUser);

//Objects,arrays and array method for benefits. For index.html
const benefits = [
    {
        icon: "images/calm.svg",
        title: "Reduced Stress and Anxiety",
        desc: "Meditation helps calm the mind and reduce stress levels, leading to a greater sense of peace and well-being."
    },
    {
        icon: "images/focus.svg",
        title: "Improved Focus and Concentration",
        desc: "Regular meditation practice can enhance your ability to concentrate and stay focused on tasks."
    },
    {
        icon: "images/emotions.svg",
        title: "Enhanced Emotional Well-Being",
        desc: "Meditation can lead to improved emotional health by promoting a greater sense of self-awareness and emotional regulation."
    }
];

function displayBenefits() {
    const benefitsList = document.getElementById("benefits-list");
    benefitsList.innerHTML = ""; 
    benefits.forEach(benefit => {
        benefitsList.innerHTML +=
        `<div class="benefit">
          <img src="${benefit.icon}" alt="${benefit.title} icon" loading="lazy" class="benefit-icon" width="60">
          <h3>${benefit.title}</h3>
          <p>${benefit.desc}</p>
        </div>`;
    });
}
document.addEventListener("DOMContentLoaded", displayBenefits);