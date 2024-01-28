import { accounts } from "./accounts.js";
import { movements } from "./movements.js";
console.log(accounts)
console.log(movements)

const saldo=document.querySelector('.balance')
const app = document.querySelector('.app')
const form = document.querySelector('.form')
const nombreEl = document.querySelector('#nombre')
const apellidoEl = document.querySelector('#apellido')
const passwordEl = document.querySelector('#password')
const mensajeEl = document.querySelector('.mensaje')
const nDeposEL = document.querySelector('.movements__type movements__type--deposit')
const fechEL = document.querySelector('.mensaje')
const nRetiradasEl = document.querySelector('movements__type movements__type--withdrawal')
const containerMovements = document.querySelector('.movements')
const labelSumOut=document.querySelector('.labelSumOut')
const labelSumIn=document.querySelector('.labelSumIn')
const labelSumInterest=document.querySelector('.labelSumInterest')
let clients, nombre, apellido, password

form.addEventListener('submit', (e) => {
  e.preventDefault()
  nombre = nombreEl.value
  apellido = apellidoEl.value
  password = passwordEl.value

  clients = accounts.map(client => [...client.owner.split(' '), client.pin])
  console.log(clients)

  const client = clients.filter(client => {

    if (client[0] == nombre && client[1] == apellido && password == client[2]) {
      app.classList.add('show')
      form.style.display = 'none'
      mensajeEl.innerHTML = `<h2 class="mt-5">BIENVENIDO Sr.  ${nombre} ${apellido}</h2>
            <h4>aqui tiene sus movimientos</h4> `
    }
    return client[0] == nombre && client[1] == apellido && password == client[2]
  })

  const cliente = accounts.filter(client => client.owner == `${nombre} ${apellido}`)
  console.log(cliente)
  displayMovements(cliente[0].movements)

  const deposits = cliente[0].movements.filter(mov => mov.value > 0)
  console.log(deposits)
  const retiradas = cliente[0].movements.filter(mov => mov.value < 0)
  console.log(retiradas)
  const balance = cliente[0].movements.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration ${i}: ${acc} curr ${cur.value}`);
    return acc + cur.value;
  }, 0);
  console.log(balance)

  const calcDisplayBalance = function (acc) {
    console.log(cliente[0].movements)
    const balance = acc.reduce((acc, mov) => acc + mov.value, 0);
    saldo.textContent = `${balance}€`;
  };
  calcDisplayBalance(cliente[0].movements)
  calcDisplaySummary(cliente[0].movements)
})



const displayMovements = (movements) => {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov.value > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov.value}€</div>
        </div>
      `;

    containerMovements.insertAdjacentHTML('beforeend', html);
  });
};

const calcDisplaySummary = function (acc) {
  const incomes = acc
    .filter(mov => mov.value > 0)
    .reduce((acc, mov) => acc + mov.value, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc
    .filter(mov => mov.value < 0)
    .reduce((acc, mov) => acc + mov.value, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.innerHTML = `${interest*100000}€`;
};





