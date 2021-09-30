function checkFirstName() {
  let msg = document.getElementById('fnameFeedback');
  if (this.value.length < 3) {
    msg.textContent = "First name must be at least 3 characters or more.";
  } else {
    msg.textContent = '';
  }
}

let firstName = document.getElementById('fname');
firstName.addEventListener('blur', checkFirstName, false);

function checkLastName() {
  let msg = document.getElementById('lnameFeedback');
  if (this.value.length < 3) {
    msg.textContent = "Last name must be at least 3 characters or more.";
  } else {
    msg.textContent = '';
  }
}

let lastName = document.getElementById('lname');
lastName.addEventListener('blur', checkLastName, false);

function checkAge() {
  let msg = document.getElementById('ageFeedback');
  if (isNaN(this.value) != false) {
    msg.textContent = "Age must be a number";
  } else {
    msg.textContent = '';
  }
}

let age = document.getElementById('age');
age.addEventListener('blur', checkAge, false);
