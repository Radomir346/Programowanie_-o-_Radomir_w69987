// functions to validate form fields
function validateRequired(field) {
    return field.value !== "";
}

function validateLength(field, min, max) {
    return field.value.length >= min && field.value.length <= max;
}

function validateEmail(field) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(field.value);
}

function validatePasswordStrength(field) {
    return field.value.length >= 8;
}

function validateDateOfBirth(field) {
    // check if date of birth is in the past
}

function updateWojewodztwo() {
    var country = document.getElementById("country").value;
    if (country === "Poland") {
        document.getElementById("wojewodztwo").innerHTML = "";
        // populate options dynamically
        // ...
    }
}

// function to validate form on submit
function validateForm() {
    var errors = [];

    // validate each field
    if (!validateRequired(document.getElementById("name"))) {
        errors.push("Imiê jest wymagane");
    }

    // ...

    // display error messages
    document.getElementById("error-messages").innerHTML = "";
    if (errors.length > 0) {
        for (var i = 0; i < errors.length; i++) {
            document.getElementById("error-messages").innerHTML += "<p>" + errors[i] + "</p>";
        }
        return false;
    } else {
        return true;
    }
}

// add event listener to form submit
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
        // form is valid, proceed with submission
        // ...
    }
});

// add event listener to each field to trigger validation on input
document.getElementById("name").addEventListener("input", function () {
    validateForm();
});
// ...