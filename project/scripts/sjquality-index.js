const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const currentYear = document.querySelector("#currentYear");
const lastPage = localStorage.getItem("lastPage");
const today = new Date();
const lastModified = document.querySelector("#lastModified");

// Menu
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});


// footer
currentYear.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

if (lastPage) {
    document.querySelector("#lastPage").textContent =
        `Last page visited: ${lastPage}`;
}

// Home
// smooth scroll to Learn more

document.querySelector(".button").addEventListener("click", (event) => {
    event.preventDefault();

    document.querySelector("#categories").scrollIntoView({
        behavior: "smooth"
    });
});

// Save last page visited
localStorage.setItem("lastPage", "Home");


//Subscribed Form:

const form = document.querySelector("#subscribeForm");
const message = document.querySelector("#subscribeMessage");

const savedEmail = localStorage.getItem("subscriber");
const emailName = localStorage.getItem("subscribedName");

if (savedEmail) {
    message.textContent = `Hello ${emailName}! You are subscribed as ${savedEmail}.`;
}

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;

    localStorage.setItem("subscriber", email);
    localStorage.setItem("subscribedName", name);
    localStorage.setItem("subscribed", "true");

    message.textContent = `Thanks for subscribing, ${name}!`;

    form.reset();

});