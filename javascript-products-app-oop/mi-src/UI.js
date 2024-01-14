export class UI {

    addProduct(product) {

        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.classList.add("card");
        element.innerHTML = `
       <table class="table table-striped table-bordered table-sm">
       <tr>  
       <th>Nombre</th><td>${product.name}</td>
       <th>Precio</th><td>${product.price}</td>
       <th>año</th><td>${product.year}</td>
       <td><a href="#" class="btn btn-danger" name="delete">Borrar</a></td>
       </tr>
       </table>
       `
        productList.appendChild(element)

    }
    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === "delete") {
            element.parentElement.parentElement.remove();
            this.showMessage("Product Deleted Succsssfully", "success");
        }
    }
    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
    
        // Show in The DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
    
        // Insert Message in the UI
        container.insertBefore(div, app);
    
        // Remove the Message after 3 seconds
        setTimeout(function () {
          document.querySelector(".alert").remove();
        }, 3000);
      }

}