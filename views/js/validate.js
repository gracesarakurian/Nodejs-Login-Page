const form = document.querySelector("form");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");
form.addEventListener("submit", onSubmitFunction);
function onSubmitFunction(event) {
  event.preventDefault();
  if (email.value == "" || password.value == "") {
    alert("Please fill the form");
    return false;
  }
}
