"use strict";

const app = document.querySelector("#app");
// --------create form
const form = document.createElement("form");
form.className = "form";

// --------create input1
const inputName = document.createElement("input");
inputName.type = "text";
inputName.name = "name";
inputName.id = "inputName";
inputName.placeholder = "Enter your name";

// --------create input2
const inputSurname = document.createElement("input");
inputSurname.type = "text";
inputSurname.name = "surname";
inputSurname.id = "inputSurname";
inputSurname.placeholder = "Enter your surname";

// --------create button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.innerHTML = "Submit";

// --------add submit listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = inputName.value;
  const surnameValue = inputSurname.value;

  if (e.submitter === submitButton) {
    const newForm = {
      name: nameValue,
      surname: surnameValue,
      wasClicked: true,
    };
    console.log("[newForm]", newForm);
  }
});

// --------append to form
form.appendChild(inputName);
form.appendChild(inputSurname);
form.appendChild(submitButton);

// --------append to app
app.appendChild(form);

// ========
console.log("[app]", app);
