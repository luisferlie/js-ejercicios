
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1-Crear un array con los jugadores de cada equipo (*player1* y *player2*)
const [players1, players2] = game.players
console.log(players1)
//2. El  portero del Bayern de Munich es *Neuer*, el resto de la lista son jugadores. Crea una variable para el portero (goalKeeper)  y otra para los jugadores del Bayern  (fieldPlayers)
const [goalKeeper, ...fieldPlayers] = players1
console.log(goalKeeper)
console.log(fieldPlayers)
//3-Crea un array con todos los jugadores de ambos equipos (*allPlayers*)
const allPlayers = players1.concat(players2)
console.log(allPlayers)
//4. Durante  el  partido,  el Bayern Munich utiliza 3  reservas. Crea un nuevo array **players1Final** que contenga el  equipo de inicio y los reservas *Thiago*, *Coutinho* y *Perisic*.
players1Final = [...players1]
players1Final.push('Thiago')
players1Final.push('Coutinho')
players1Final.push('Perisic')

console.log(players1Final)
console.log(players1)
//5. En base  al objeto game.odds, crea una  variable para cada apuesta  y llámalas *team1*, *draw* y *team2*.
const { team1, x: draw, team2 } = game.odds
console.log(draw, team1, team2)
//6. Escribe una función *printGoals* que recibe un número arbitrario de nombres de jugadores (no un array) e imprime sus nombres por consola así como el total de goles marcados (uno por cada jugador). Usa luego la función mandando como parámetro *game.scored*

function printGoals(goalplayers) {
    const goles={}
    const golPlayers = [...goalplayers]
    golPlayers.forEach((element) => {

        if(element in goles){ 
            goles[element]++
        }else{
            goles[element]=1
        }

    });
    for (const key in goles) {
       
            const element = goles[key];
            console.log(key,element)
        
    }
    console.log(goles)
}
printGoals(game.scored)

//7. El equipo con la apuesta menor es el que tiene más probabilidades de ganar. Imprime ese dato por consola SIN USAR un operador if/else  o un operador ternario.