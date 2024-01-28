import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupSearch = (store) => {
    const form = getElement('.input-form');
    const nameInput = getElement('.search-input')

    form.addEventListener('keyup', () => {
        console.log('buscar')
        let value = nameInput.value;
        console.log('value', value)
        if (value) {
            const newStore = store.filter(product => {
                let { name } = product
                name = name.toLowerCase();
                if (name.startsWith(value)) {
                    return true
                }
            })
            console.log(newStore)

            display(newStore, getElement('.products-container'))

            if (newStore.length < 1) {
                const products = getElement('.products-container');
                products.innerHTML = `<h3 class="filter-error">
               no hay productos para su busqueda
               </h3>`;
            } else {
                display(newStore, getElement('.products-container'));
            }
        }
    })
}
export default setupSearch;