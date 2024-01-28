import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    let newStore=[]
    let companies = ['todas', ...new Set(store.map(item => item.company))]
    const companiesDom = document.querySelector('.companies');
    companiesDom.innerHTML = companies.map(company => {
        return `<button class="company-btn" data-comp='${company}'>${company}</button>`;
    }).join('')

    companiesDom.addEventListener('click', function (e) {
        console.log(e.target.dataset.comp)
        let company = e.target.dataset.comp
        console.log(company)
        company = company.toLowerCase();
        let newStore = []


        if (company === 'todas') {
            newStore = [...store]
            console.log(newStore)
            
        } else {
            newStore = store.filter((product) => product.company === company)
            console.log(newStore)
        }
        display(newStore, getElement('.products-container'));
    })

    
}

export default setupCompanies