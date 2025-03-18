// List of Students
const students = [
    "Tommy", "Alex", "Jordan", "Taylor", "Sam", "Morgan", 
    "Chris", "Jamie", "Riley", "Casey", "Drew", "Jesse",
    "Robin", "Quinn", "Lee"
];

// Shuffle Helper Function
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Choose 1 random student
function chooseOne() {
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    document.getElementById("results").innerHTML = 
        `<div class="group"><strong>Chosen Student:</strong> ${randomStudent}</div>`;
}

// Group students into groups of size n
function groupStudents(groupSize) {
    const shuffledStudents = shuffle([...students]);
    let groups = [];

    for (let i = 0; i < shuffledStudents.length; i += groupSize) {
        groups.push(shuffledStudents.slice(i, i + groupSize));
    }

    displayGroups(groups, groupSize);
}

// Display groups on the page
function displayGroups(groups, groupSize) {
    let resultHTML = '';
    groups.forEach((group, idx) => {
        resultHTML += `<div class="group"><strong>Group ${idx + 1}:</strong> ${group.join(", ")}</div>`;
    });

    document.getElementById("results").innerHTML = resultHTML;
}

