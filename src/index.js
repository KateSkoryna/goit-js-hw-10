import './css/styles.css';
import { input, listEl, boxEl } from './refs';
import checkAndRender from './checkAndRender';
import fetchCountries from './fetchCountries';
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(onInputCoundtyRender, DEBOUNCE_DELAY));

function onInputCoundtyRender(event) {
  const value = event.target.value.toLowerCase().trim();
  console.log(value);
  if (!value) {
    listEl.innerHTML = '';
    boxEl.innerHTML = '';
    return;
  }
  fetchCountries(value)
    .then(checkAndRender)
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
