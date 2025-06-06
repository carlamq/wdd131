const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = document.lastModified;

//estatic values for the weather area
const temperature = 10; // °C
const windSpeed = 5;    // km/h
const conditions = "Partly Cloudy";

//function to calculate the wind chill (c)
function calculateWindChill(temp, wind) {
    return (temp <= 10 && wind >= 4.8)
        ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1)
        : temp.toFixed(1);
}

const windChill = calculateWindChill(temperature, windSpeed);

//DOMContentLoaded event to ensure the DOM is fully loaded before manipulating it
//it is importan to wait to load all the htlm elements before trying to manipulate them
document.addEventListener("DOMContentLoaded", () => {
    const weatherItems = document.querySelectorAll('.weather li');
    weatherItems[0].innerHTML = `<strong>Temperature:</strong> ${temperature}°C`;
    weatherItems[1].innerHTML = `<strong>Conditions:</strong> ${conditions}`;
    weatherItems[2].innerHTML = `<strong>Wind:</strong> ${windSpeed} km/h`;
    weatherItems[3].innerHTML = `<strong>Wind Chill:</strong> ${windChill}°C`;
});