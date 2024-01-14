import { Product } from './Product.js'
import { UI } from "./UI.js";

document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault()

    const name = document.getElementById('name').value,
        price = document.getElementById("price").value,
        year = document.getElementById("year").value

    const product = new Product(name, price, year)
    // UI class is responsible for updating the DOM with new products and generating a string for the list

    const ui = new UI();
    // Listeners to add new product or generate report
    if (name == '' || price == '' || year == '') {
        ui.showMessage('Coloca algo en el campo,tarugo', 'danger')
    }
    ui.addProduct(product)
    ui.showMessage('producto añadido','success')
    ui.resetForm()
})
document.getElementById("product-list").addEventListener("click", (e) => {
    const ui = new UI();
    ui.deleteProduct(e.target);
    e.preventDefault();
  });
  

