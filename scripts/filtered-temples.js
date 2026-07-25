const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

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
        templeName: "Calgary Alberta Temple",
        location: "Calgary, Alberta, Canada",
        dedicated: "2012, October, 28",
        area: 33000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/calgary-alberta-temple/calgary-alberta-temple-13199-main.jpg"
    },
    {
        templeName: "Melbourne Australia Temple",
        location: "Wantirna South, Victoria, Australia",
        dedicated: "2000, June, 16",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-58608.jpg"
    },
    {
        templeName: "Hong Kong China Temple",
        location: "Kowloon City, Hong Kong",
        dedicated: "1996, May, 26-27",
        area: 51921,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28222.jpg"
    },

];


addTempleCards(temples);

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    addTempleCards(temples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    addTempleCards(temples.filter(
        temple => Number(temple.dedicated.slice(0, 4)) < 1900))
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    addTempleCards(temples.filter(
        temple => Number(temple.dedicated.slice(0, 4)) > 2000))
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    addTempleCards(temples.filter(
        temple => Number(temple.area) > 90000))
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    addTempleCards(temples.filter(
        temple => Number(temple.area) < 10000))
});



function addTempleCards(filtered) {
    document.querySelector("#temples").innerHTML = "";
    filtered.forEach(temple => {

        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Location:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.dedicated} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("#temples").appendChild(card);
    });

}





