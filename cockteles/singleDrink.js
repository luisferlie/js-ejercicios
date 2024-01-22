const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
  
};


const fetchDrinks = async (url) => {
 
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};


const displayDrink = (data) => {
   

    const drink = data.drinks[0];
    const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ];

    const img = getElement('.drink-img');
    const drinkName = getElement('.drink-name');
    const description = getElement('.drink-desc');
    const ingredients = getElement('.drink-ingredients');
    img.src = image;
    document.title = name;
    drinkName.textContent = name;
    description.textContent = desc;
    ingredients.innerHTML = list
        .map((item) => {
            if (!item) return;
            return `<li><i class="far fa-check-square"></i>${item}</li>`;
        })
        .join('');
};

const showDrinks = async (url) => {
    // fetch drinks
    const data = await fetchDrinks(url);

    // display drinks
    const section = await displayDrinks(data);
    if (section) {
        setDrink(section);
    }
}

const presentDrink = async () => {
    const id = localStorage.getItem('drink');
    console.log(id)
    if (!id) {
        window.location.replace('index.html');
    } else {
        const drink = await fetchDrinks(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        console.log(drink)
        displayDrink(drink);
    }
};

window.addEventListener('DOMContentLoaded', presentDrink);
