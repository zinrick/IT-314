document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("studentForm");
    const nameInput = document.getElementById("studentName");
    const programInput = document.getElementById("program");
    const studentList = document.getElementById("studentList");


    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = nameInput.value.trim();
        const program = programInput.value.trim();


        if (name === "" || program === "") {
            alert("Please enter the student name and program.");
            return;
        }


        const card = document.createElement("div");
        card.className = "student-card";


        const studentName = document.createElement("h3");
        studentName.textContent = name;


        const studentProgram = document.createElement("p");
        studentProgram.textContent = "Program: " + program;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        removeButton.addEventListener("click", function () {
            card.remove();
        });

        card.appendChild(studentName);
        card.appendChild(studentProgram);
        card.appendChild(removeButton);

        studentList.appendChild(card);

        nameInput.value = "";
        programInput.value = "";

    });

});
