
'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
		// destructuring más elegante que JSON.parse(this.responseText)[0]
    const [data] = JSON.parse(this.responseText);
    const name = data.name.common;
    const flag = data.flags.svg;
    const { region, population } = data;
    const language = Object.values(data.languages)[0];
    const currency = Object.values(data.currencies)[0].name;
    const html = `
    <article class="country">
      <img class="country__img" src="${flag}" />
      <div class="country__data">
        <h3 class="country__name">${name}</h3>
        <h4 class="country__region">${region}</h4>
        <p class="country__row"><span>👫</span>${(population / 1000000).toFixed(
          1
        )} Million people</p>
        <p class="country__row"><span>🗣️</span>${language}</p>
        <p class="country__row"><span>💰</span>${currency}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('spain');
getCountryData('portugal');
getCountryData('germany');
getCountryData('france');
