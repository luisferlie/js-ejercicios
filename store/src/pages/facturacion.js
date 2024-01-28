import {getStorageItem,getElement} from '../utils.js'

let products=getStorageItem('cart')
console.log(products)
const productList=getElement('.product-detail')
const totalFacturacion=getElement('.total-facturacion')

productList.innerHTML = products.map((item)=>{
    const {price,amount,name,image}=item 
    console.log(image)
    return `<div class="mt-5 card card-body mb-3 d-flex flex-row justify-content-between w-50">  
                <span class="me-3 fw-bold">${name}</span>   
                <span class="me-3 fw-bold">${price/100}</span>   
                <span class="me-3 fw-bold">${amount}</span> 
                <img src="${image}" alt="" width="100"/>
                </div> 
                `
}).join() 

let total= products.reduce((acc,value)=>{
    return acc+value.price*value.amount
},0);
totalFacturacion.innerHTML=`<div class="d-flex justify-content-around"><h2 class="fw-bold">Total de la facturación:</h2>
<p class=" ms-5 fs-1 fw-bold text-success">$${total/100}</p></div> `;

