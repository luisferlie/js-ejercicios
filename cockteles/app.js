const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
  showDrinks(URL);
});
//helpers
const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
   /*  throw new Error("no element selected"); */
  };
const loading = getElement('.loading');

const showLoading = () => {
 loading.classList.remove('hide-loading');
};
const hideLoading = () => {
 loading.classList.add('hide-loading');
};
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = getElement('.form');
const input = getElement('#searchInput');

form.addEventListener('keyup', function (e) {
    e.preventDefault();
    
    const value = input.value;
    console.log(value)
    if (!value) return;
    showDrinks(`${baseURL}${value}`);
  });

const showDrinks = async (url) => {
    // fetch drinks
    const data = await fetchDrinks(url);
  
    // display drinks
    const section = await displayDrinks(data);
    if (section) {
      setDrink(section);
    }
  };

 export const fetchDrinks = async (url) => {
    showLoading();
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

 export const displayDrinks = ({ drinks }) => {
    const section = getElement('.section-center');
    const title = getElement('.title');
    if (!drinks) {
      // hide loading
      hideLoading();
      title.textContent = 'sorry, no drinks matched your search';
      section.innerHTML = null;
      return;
    }
    const newDrinks = drinks
      .map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
  
        return `<a href="drink.html">
            <article class="cocktail" data-id="${id}">
              <img src="${image}" alt="${name}" />
              <h3>${name}</h3>
            </article>
          </a>`;
      })
      .join('');
    hideLoading();
    title.textContent = '';
    section.innerHTML = newDrinks;
    return section;
  };

  const setDrink = (section) => {
    section.addEventListener('click', function (e) {
      // e.preventDefault();
      const id = e.target.parentElement.dataset.id;
      // JSON.stringify JSON.parse
      localStorage.setItem('drink', id);
    });
  };

 
