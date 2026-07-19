

const temperature = 30;

const windSpeed = 5;
const windChill = document.querySelector("#windChill");

function calculateWindChill(temp, windSpeed) {

    return (35.74 + (0.6215 * temp) - (35.75 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16));
}

if (temperature <= 50 && windSpeed > 3) {
    windChill.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + "°F";
} else {
    windChill.textContent = "N/A";
}