const button = document.querySelector('[data-js="cta"]');
const userName = 'frontend learner';

button.addEventListener('click', () => {
  console.log(userName.toUpperCase());
});