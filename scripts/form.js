const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
  
document.addEventListener("DOMContentLoaded", () => {
    const select = document.querySelector('select[name="product"]');
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});

const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.endsWith("review.html")) {
        let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);

        //for main
        let counter = document.createElement("p");
        counter.textContent = `You have submitted ${reviewCount} review(s).`;
                document.querySelector("main").appendChild(counter);
            }
        });