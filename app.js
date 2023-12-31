const form = document.querySelector(".newsletter__section--form");
const inputEmail = document.querySelector(
  ".newsletter__section--button--submit"
);
const input = document.querySelector(".newsletter__section--input");
const inputEmailError = document.querySelector(
  ".newsletter__section--input--p"
);

form.addEventListener("submit", (e) => {
  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  console.log(inputEmail.value);
  if (regExp.test(input.value) == false) {
    input.style.border = "2px solid hsl(0, 100%, 63%)";
    inputEmailError.innerHTML = "Please provide a valid Email";
    e.preventDefault();
  }
});
