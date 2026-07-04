const currentYear = document.querySelector("#currentYear");
const today = new Date();
const lastModified = document.querySelector("#lastModified");

currentYear.innerHTML = today.getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;