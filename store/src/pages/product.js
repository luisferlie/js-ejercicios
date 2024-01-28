// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

let productID;

window.addEventListener('DOMContentLoaded', async function () {
    const urlID = window.location.search;
    console.log(`${singleProductUrl}${urlID}`)

    try {
        const response = await fetch(`${singleProductUrl}${urlID}`)
        const product = await response.json()
        const { id, fields } = product
        productID = id;
        const { name, company, colors, featured, price, description } = fields
        const image = fields.image[0].url
        console.log(image)

        document.title = `${name.toUpperCase()} | Tienda`;
        pageTitleDOM.textContent = `Inicio / ${name}`;
        imgDOM.src = image;
        titleDOM.textContent = name;
        companyDOM.textContent = `obra de ${company}`;
        priceDOM.textContent = formatPrice(price);
        descDOM.textContent = description;
        colors.forEach((color) => {
            const span = document.createElement('span');
            span.classList.add('product-color');
            span.style.backgroundColor = `${color}`;

            colorsDOM.appendChild(span);


        });
        const spantext = document.createElement('span');
        spantext.textContent = 'elije tu color'
        spantext.style.color='blue'
        colorsDOM.appendChild(spantext)
       
       
        colorsDOM.appendChild(div)
    } catch (error) {
        console.log(error)
    }
    loading.style.display = 'none';
})

cartBtn.addEventListener('click', function () {
    console.log(productID)
    addToCart(productID);
});
window.addEventListener('keydown', closeCart)

function closeCart(e){
    if (e.key == 'Escape') {
        console.log(e.key)
        document.querySelector(".cart-overlay").classList.remove('show')
    }
}