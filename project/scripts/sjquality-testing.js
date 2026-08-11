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


const testingTypes = [
    {
        name: "Functional Testing",
        category: "functional",
        description: "Verifies software behaves according to requirements."
    },
    {
        name: "Regression Testing",
        category: ["functional", "automation"],
        description: "Ensures existing features continue working after changes."
    },
    {
        name: "API Testing",
        category: "automation",
        description: "Tests application programming interfaces."
    },
    {
        name: "Performance Testing",
        category: "nonfunctional",
        description: "Measures speed and scalability."
    },
    {
        name: "Security Testing",
        category: "nonfunctional",
        description: "Identifies security vulnerabilities."
    },
    {
        name: "User Acceptance Testing",
        category: "manual",
        description: "Validates software with end users."
    }
];

//Display
function displayTesting(testList) {

    const cards = document.querySelector("#testingCards");

    cards.innerHTML = "";

    testList.forEach(test => {

        cards.innerHTML += `
            <article class="card">
                <h2>${test.name}</h2>
                <p>${test.description}</p>
            </article>
        `;

    });

}


// Initial Display
displayTesting(testingTypes);

// Filter Buttons
document.querySelector("#all").addEventListener("click", () => {
    displayTesting(testingTypes);
});

document.querySelector("#manual").addEventListener("click", () => {
    displayTesting(testingTypes.filter(test => test.category === "manual"));
});

document.querySelector("#automation").addEventListener("click", () => {
    displayTesting(testingTypes.filter(test => test.category.includes("automation")));
});

document.querySelector("#functional").addEventListener("click", () => {
    displayTesting(testingTypes.filter(test => test.category === "functional"));
});

document.querySelector("#nonfunctional").addEventListener("click", () => {
    displayTesting(testingTypes.filter(test => test.category === "nonfunctional"));
});

// footer
currentYear.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

if (lastPage) {
    document.querySelector("#lastPage").textContent =
        `Last page visited: ${lastPage}`;
}


// Save last page visited
localStorage.setItem("lastPage", "Testing");
