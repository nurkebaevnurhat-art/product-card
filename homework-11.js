const modal = document.querySelector(".modal");
const registrationForm = document.querySelector(".registration_form");
const firstNameInput = document.querySelector('input[name="firstName"]');
const lastNameInput = document.querySelector('input[name="lastName"]');
const birthDateInput = document.querySelector('input[name="birthDate"]');
const loginInput = document.querySelector('input[name="login"]');
const passwordInput = document.querySelector('input[name="password"]');
const repeatPasswordInput = document.querySelector('input[name="repeatPassword"]');


registrationForm.addEventListener("submit", (event) => {
event.preventDefault();


if (!registrationForm.checkValidity()) {
  alert("Заполните все обязательные поля");
  return;
}


const formData = new FormData(registrationForm);
const user = Object.fromEntries(formData.entries());

if (user.password !== user.repeatPassword) {
  alert("Пароли не совпадают");
  return;
}
user.createdOn = new Date();
console.log ("пользователь зарегистрирован:", user)

modal.close();

registrationForm.reset();
});