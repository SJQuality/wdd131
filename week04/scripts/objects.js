let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        {
            section: "A",
            enrolled: 15,
            instrutor: "Jim Carey"
        },
        {
            section: "B",
            enrolled: 18,
            instrutor: "Bill Muray"
        },
    ]
};

function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} - {course.title}`;
}

function renderSections() {
    const tbody = document.querySelector("#sections tbody");
    let rows = "";
    for (const section of course.sections) {
        rows += `<tr>
            <td>${section.section}</td>
            <td>${section.enrolled}</td>
            <td>${section.instrutor}</td>
            </tr>`;
    }
    tbody.innerHTML = rows;
}