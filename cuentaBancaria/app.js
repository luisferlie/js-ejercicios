
import { movements } from "./movements.js";
let accounts = [
  {
    owner: 'Sarah Smith',
    movements: [
      {
        date: '2021-01-01',
        value: 430,
      },
      {
        date: '2021-01-02',
        value: 1000,
      },
      {
        date: '2021-01-03',
        value: 700,
      },
      {
        date: '2021-01-04',
        value: -300,
      },
      {
        date: '2021-01-05',
        value: 4000,
      },
      {
        date: '2021-01-06',
        value: 300,
      },
      {
        date: '2021-01-07',
        value: -7000,
      },
      {
        date: '2021-01-08',
        value: 200,
      }
    ],
    interestRate: 1,
    pin: 4444,
  },
  {
    owner: 'Luis Fernandez',
    movements: [
      {
        date: '2021-01-01',
        value: 1000,
      },
      {
        date: '2021-01-02',
        value: -500,
      },
      {
        date: '2021-01-03',
        value: 3000,
      },
      {
        date: '2021-01-04',
        value: -200,
      },
      {
        date: '2021-01-05',
        value: 5000,
      },
      {
        date: '2021-01-06',
        value: -6000,
      },
      {
        date: '2021-01-07',
        value: 7000,
      },
      {
        date: '2021-01-08',
        value: -900,
      }
    ],
    interestRate: 1,
    pin: 3333,
  },
  {
    owner: 'Juan poe',
    movements: [
      {
        date: '2021-01-01',
        value: 1000,
      },
      {
        date: '2021-01-02',
        value: 2000,
      },
      {
        date: '2021-01-03',
        value: 3000,
      },
      {
        date: '2021-01-04',
        value: 4000,
      },
      {
        date: '2021-01-05',
        value: 5000,
      },
      {
        date: '2021-01-06',
        value: 6000,
      },
      {
        date: '2021-01-07',
        value: 7000,
      },
      {
        date: '2021-01-08',
        value: 8000,
      }
    ],
    interestRate: 1,
    pin: 2222,
  },
  {
    owner: 'pepe pin',
    movements: [
      {
        date: '2021-01-01',
        value: 1000,
      },
      {
        date: '2021-01-02',
        value: 2000,
      },
      {
        date: '2021-01-03',
        value: 3000,
      },
      {
        date: '2021-01-04',
        value: 4000,
      },
      {
        date: '2021-01-05',
        value: 5000,
      },
      {
        date: '2021-01-06',
        value: 6000,
      },
      {
        date: '2021-01-07',
        value: 7000,
      },
      {
        date: '2021-01-08',
        value: 8000,
      }
    ],
    interestRate: 10,
    pin: 1111,
  },
]

accounts = JSON.parse(localStorage.getItem('accounts')) || accounts

const saldo = document.querySelector('.balance')
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
const labelSumOut = document.querySelector('.labelSumOut')
const labelSumIn = document.querySelector('.labelSumIn')
const labelSumInterest = document.querySelector('.labelSumInterest')
const transferBtn = document.querySelector('.transfer-btn')
const transferPanel = document.querySelector('.transfer-container')
const destinatarios = document.querySelector('.destinatarios')

let clients, nombre, apellido, password
app.classList.add('hide')


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
  calcDisplaySummary(cliente[0].movements, cliente[0].interestRate)
 

  let htmlDest = ''

  accounts.forEach(acc => {

    htmlDest += `<h2><button class="destinatario btn btn-outline-primary">${acc.owner}</button></h2><br>`
  })
  console.log(htmlDest)

  destinatarios.innerHTML = htmlDest
  const destinatario = document.querySelectorAll('.destinatario')
  console.log(destinatario)

  destinatario.forEach(dest => dest.addEventListener('click', transferencia))


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

const calcDisplaySummary = function (acc, int) {
  const incomes = acc
    .filter(mov => mov.value > 0)
    .reduce((acc, mov) => acc + mov.value, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc
    .filter(mov => mov.value < 0)
    .reduce((acc, mov) => acc + mov.value, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc
    .filter(mov => mov.value > 0)
    .map(deposit => (deposit.value * int) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.innerHTML = `${interest}€`;
};
transferBtn.addEventListener('click', openTransferPanel)

function openTransferPanel() {
  transferPanel.classList.add('show')

}

function transferencia(e) {
  console.log(accounts)
  const valor = 0
  const transBtn = document.querySelector('#trans')
  console.log(e.target.textContent)
  console.log('transfer')

  transferPanel.classList.remove('show')
  const destinoForm = document.querySelector('.destino')
  const transferInputEl = document.querySelector('.transfer')
  const destinNombreEl = document.querySelector('.destin-nombre')
  destinNombreEl.textContent = e.target.textContent
  destinoForm.classList.add('show')


  transBtn.addEventListener('click', transfering)

  function transfering(e) {
    e.preventDefault();
    let date = new Date()
    let fecha = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

    const nombreDestino = destinNombreEl.textContent;
    let monto = Number(transferInputEl.value);
    const mensajeEl = document.querySelector('.mensaje-trans')
    const emisor = nombreEl.value + ' ' + apellidoEl.value
   
    let mov = accounts.find(acc => acc.owner == emisor).movements
   
    let bal = calcDisplayBalance(mov)
        
     if (monto > bal) {
      mensajeEl.innerHTML = "<h1 style='color:blue'>no hay saldo suficiente</h1>"
      return
     }else{
      accounts.filter(elem => elem.owner == emisor)[0].movements.push({ date: fecha, value: -monto, 'transfer': true })
     }
    
    accounts.filter(elem => elem.owner == nombreDestino)[0].movements.push({ date: fecha, value: monto, 'transfer': true })

   
    mensajeEl.innerHTML = "<h3 style='color:blue'>transferencia realizada</h3>"
    displayMovements(mov)
    localStorage.setItem('accounts', JSON.stringify(accounts))
    const otraTransEl = document.querySelector('.otratrans-btn')
    const volverEl = document.querySelector('.btn.btn-sm.vover-btn')
    otraTransEl.addEventListener('click', ()=>transferBtn.click())
    volverEl.addEventListener('click', volver)

  }
  function volver(e) {
    location.href = 'index.html'
  }

}
const calcDisplayBalance = function (acc) {
  console.log(acc)
  const balance = acc.reduce((acc, mov) => acc + mov.value, 0);
  saldo.textContent = `${balance}€`
  return balance

};



