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

// Search - store
const tools = [
    {
        name: "Jira",
        description: "Track bugs and Agile projects."
    },
    {
        name: "Playwright",
        description: "Modern browser automation testing."
    },
    {
        name: "Selenium",
        description: "Browser automation framework."
    },
    {
        name: "Postman",
        description: "API testing and development."
    },
    {
        name: "TestRail",
        description: "Test case management."
    },
    {
        name: "GitHub",
        description: "Version control and collaboration."
    }
];

// Search Initial Display
displayTools(tools);

// Search Display
function displayTools(toolList) {

    const cards = document.querySelector("#toolCards");

    cards.innerHTML = "";

    toolList.forEach(tool => {

        cards.innerHTML += `
            <article class="card">
                <h2>${tool.name}</h2>
                <p>${tool.description}</p>
            </article>
        `;

    });

}
// Search Search
const search = document.querySelector("#search");

search.addEventListener("input", () => {

    const text = search.value.toLowerCase();

    const filtered = tools.filter(tool =>
        tool.name.toLowerCase().includes(text) ||
        tool.description.toLowerCase().includes(text)
    );

    displayTools(filtered);

});



// footer
currentYear.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

if (lastPage) {
    document.querySelector("#lastPage").textContent =
        `Last page visited: ${lastPage}`;
}


// Save last page visited
localStorage.setItem("lastPage", "Tools");