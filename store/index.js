// global imports
import './src/toggleSidebar.js';
/* import './src/cart/toggleCart.js';
import './src/cart/setupCart.js'; */
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { allProductsUrl } from './src/utils.js';
import display from './src/displayProducts.js'
import { setupStore, store } from './src/store.js';

import { getElement } from './src/utils.js'; 

const init = async () => {
  const products = await fetchProducts();
  console.log(allProductsUrl)
  console.log(products)
  if (products) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product );
    display(featured, getElement('.featured-center'));
  }
};

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('keydown', closeCart)

function closeCart(e){
    if (e.key == 'Escape') {
        console.log(e.key)
        document.querySelector(".cart-overlay").classList.remove('show')
    }
}