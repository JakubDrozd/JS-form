const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});

email.addEventListener("keyup", function (e) {
  const emailValue = email.value.trim();
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (emailValue === ``) {
    setErrorFor(email, `Please enter your email`);
  } else if (!emailRegex.test(emailValue)) {
    setErrorFor(email, `Entered email address is invalid`);
  } else {
    setSuccessFor(email);
  }
});

country.addEventListener("keyup", function (e) {
  const countryValue = country.value.trim();
  if (countryValue === ``) {
    setErrorFor(country, `Please enter country`);
  } else {
    setSuccessFor(country);
  }
});

zipcode.addEventListener("keyup", function (e) {
  const zipCodeRegex = /^[0-9]{2}-[0-9]{3}$/;
  const zipcodeValue = zipcode.value.trim();
  if (zipcodeValue === ``) {
    setErrorFor(zipcode, `Please enter your Zip Code`);
  } else if (!zipCodeRegex.test(zipcodeValue)) {
    setErrorFor(zipcode, `Entered Zip Code is invalid`);
  } else {
    setSuccessFor(zipcode);
  }
});

password.addEventListener("keyup", function (e) {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const passwordValue = password.value.trim();
  if (passwordValue === ``) {
    setErrorFor(password, `Please enter your password`);
  } else if (!passwordRegex.test(passwordValue)) {
    setErrorFor(password, `Entered password does not meet requirements`);
  } else {
    setSuccessFor(password);
  }
});

password2.addEventListener("keyup", function (e) {
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  if (password2Value === ``) {
    setErrorFor(password2, `Please confirm your password`);
  } else if (password2Value !== passwordValue) {
    setErrorFor(password2, `Entered passwords don't match`);
  } else {
    setSuccessFor(password2);
  }
});

function checkInputs() {
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const zipCodeRegex = /^[0-9]{2}-[0-9]{3}$/;

  const emailValue = email.value.trim();
  const countryValue = country.value.trim();
  const zipcodeValue = zipcode.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (emailValue === ``) {
    setErrorFor(email, `Please enter your email`);
  } else if (!emailRegex.test(emailValue)) {
    setErrorFor(email, `Entered email address is invalid`);
  } else {
    setSuccessFor(email);
  }

  if (countryValue === ``) {
    setErrorFor(country, `Please enter country`);
  } else {
    setSuccessFor(country);
  }

  if (zipcodeValue === ``) {
    setErrorFor(zipcode, `Please enter your Zip Code`);
  } else if (!zipCodeRegex.test(zipcodeValue)) {
    setErrorFor(zipcode, `Entered Zip Code is invalid`);
  } else {
    setSuccessFor(zipcode);
  }

  if (passwordValue === ``) {
    setErrorFor(password, `Please enter your password`);
  } else if (!passwordRegex.test(passwordValue)) {
    setErrorFor(password, `Entered password does not meet requirements`);
  } else {
    setSuccessFor(password);
  }

  if (password2Value === ``) {
    setErrorFor(password2, `Please confirm your password`);
  } else if (password2Value !== passwordValue) {
    setErrorFor(password2, `Entered passwords don't match`);
  } else {
    setSuccessFor(password2);
  }

  if (
    password.parentElement.className === "field success" &&
    country.parentElement.className === "field success" &&
    zipcode.parentElement.className === "field success" &&
    password.parentElement.className === "field success" &&
    password2.parentElement.className === "field success"
  ) {
    document.getElementById("form").submit();
  }
}

function setErrorFor(input, message) {
  const parent = input.parentElement;
  parent.className = "field error";
  const small = input.parentElement.querySelector("small");
  small.innerHTML = message;
}

function setSuccessFor(input) {
  input.parentElement.className = "field success";
}
