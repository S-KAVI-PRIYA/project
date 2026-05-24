let subjects = [];

function addSubject() {

    let name = document.getElementById("subjectName").value;
    let difficulty = document.getElementById("subjectDifficulty").value;

    if(name === "") {
        alert("Enter subject name!");
        return;
    }

    subjects.push({name, difficulty});

    displaySubjects();

    document.getElementById("subjectName").value = "";
}

function displaySubjects() {

    let list = document.getElementById("subjectList");

    list.innerHTML = "";

    subjects.forEach((sub, index) => {

        list.innerHTML += `
            <li>
                ${sub.name} (${sub.difficulty})
                <button onclick="removeSubject(${index})">❌</button>
            </li>
        `;
    });
}

function removeSubject(index) {

    subjects.splice(index, 1);

    displaySubjects();
}

function generatePlan() {

    let hours = document.getElementById("hours").value;

    if(subjects.length === 0 || hours === "") {

        alert("Add subjects and hours!");

        return;
    }

    localStorage.setItem("subjects", JSON.stringify(subjects));
    localStorage.setItem("hours", hours);

    window.location.href = "plan.html";
}
