import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';


const randomName = faker.person.fullName(); // Willie Bahringer
const randomEmail = faker.internet.email(); // Tomasa_Ferry14@hotmail.com
      
        // Rusty@arne.info
   
console.log(accounts)
console.log(randomName)//aqui no puedo usar randomName??
console.log(randomEmail)//aqui no puedo usar randomName??


/* RANDOM MOVEMENTS con fake js*/
/**
 * 
 * @n:numero de movimientos A GENERAR
 */

let n=10
const fakeMovements=Array(0)
for (let i=0;i<n;i++){
fakeMovements.push({
    date:faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2030-01-01T00:00:00.000Z' }),
    value:faker.number.float({ min: 10, max: 10000, precision: 0.01 })
})
}
console.log(fakeMovements)

//MOMENTSJS
console.log(moment.locale('es'))
moment.lang('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
  }
  );
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
var fechaActual = moment()
var fechaActualStr = moment().format('MMMM Do YYYY, h:mm:ss a')
//Comparar fecha--hace 2 dias
console.log( fechaActual);
var fechaComparar = moment().add(6, 'days'); // Por ejemplo, resta 2 días a la fecha actual
let fechaAComparar=fechaComparar.format('MMMM Do     YYYY')
console.log(fechaAComparar)
// Calcula la diferencia de tiempo
var diferencia = moment.duration(fechaActual.diff(fechaComparar));
console.log(diferencia)





// Formatea la diferencia en formato relativo
 var formatoRelativo = moment(diferencia, "milliseconds").format("D [díassss]"); 

// Muestra el resultado
console.log("Hace " + formatoRelativo);

/* const accounts=[
    {
        owner: 'Sarah Smith',
        movements:[
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
        pin: 4444,
      },
      {
        owner: 'Luis Fernandez',
        movements:[
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
        pin: 3333,
      },
      {
        owner: 'Juan poe',
        movements:[
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
        movements:[
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
        pin: 1111,
      },
    ] */


const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
    console.log(accs)
};
createUsernames(accounts);
console.log()
var filePath = './movements.js';

// Configuración para la solicitud fetch
var opciones = {
    method: 'GET', // Puedes usar 'POST', 'GET', u otros métodos según sea necesario
};

// Realiza la solicitud fetch
fetch(filePath, opciones)
    .then((res) => res.text())
    .then((datos) => {
        datos=String(datos)
        console.log(datos)
        let movements =JSON.parse(datos)
        console.log(movements)
    })



// Procesa la respuesta
//crear datos aleatorios







/* const movements = [
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
] */
console.log(accounts)


const containerMovements = document.querySelector('.movements')
const labelBalance = document.querySelector('.balance')

const account1 = accounts[0]
console.log(account1)
const displayMovements = function (account) {
    containerMovements.innerHTML = '';
    console.log(account)
    console.log(account.movements)

    account.movements.forEach(function (mov, i) {
        const type = mov.value > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <br>
        <div class="movements__row">
        
        <div>username : ${account.username} </div>
        <div>usuario: ${account.owner}</div>
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov.value}€</div>
          <div class="movements__date">${new Date()}</div>
        </div>
      `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function (acc) {

    const balance = acc.reduce((sum, elem) => sum + elem.value, 0);
    labelBalance.textContent = `${balance}€`;
};
console.log(account1.movements)
displayMovements(account1)

calcDisplayBalance(account1.movements)

function transferencia(userOrigen, userDestino, importe) {
    let saldoOrigen = userOrigen.movements.reduce((acc, mov) => acc + mov, 0)

    if (importe > saldoOrigen || importe < 0) {
        alert("No hat suficiente saldo para hacer la transferencia o es un importe negativo")
        return;
    }
    if (!userDestino) return
    userOrigen.movements.push(-importe)
    userDestino.movements.push(importe)
    console.log(userOrigen)
    console.log(userDestino)
}
transferencia(accounts[0], accounts[1], -100)
console.log(accounts[0])
console.log(accounts[1])


