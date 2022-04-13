import throttle from 'lodash.throttle';

const FORM_DATA_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = {};

const savedFormData = JSON.parse(localStorage.getItem(FORM_DATA_KEY));

if (savedFormData && savedFormData.email) {
  form.email.value = savedFormData.email;
}
if (savedFormData && savedFormData.message) {
  form.message.value = savedFormData.message;
}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(FORM_DATA_KEY);
  formData = {};
}
