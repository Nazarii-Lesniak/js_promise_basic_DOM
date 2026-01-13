'use strict';

new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (eventClick) => {
    resolve();
  });
})
  .then(() => stringHandler('Promise was resolved!'))
  .catch(() => stringHandler('Promise was rejected!', true));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
})
  .then(() => stringHandler('Promise was resolved!'))
  .catch(() => stringHandler('Promise was rejected!', true));

function stringHandler(text, isError) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = text;

  if (isError === true) {
    div.classList.add('error-message');
  }

  document.body.append(div);
}
