
let score;
let highScore;
const INIT_SCORE = 5;

let secretNumber =  Math.trunc(Math.random() * 20) + 1;


console.log(`Secret number is ${secretNumber}`);

const scoreField = document.querySelector('.score');
const highScoreField = document.querySelector('.highscore');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const checkButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const body = document.querySelector('body');
const againButton = document.querySelector('.again');

const displayMessage = function (msg) {
	message.textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);
    console.log(`Secret number is ${secretNumber}`);
    if(guess==secretNumber){
        console.log('¡acertaste')
        highScoreField.textContent =Number( highScoreField.textContent)+1
        displayMessage('acertaste')
    }else{
       displayMessage('fallaste!')

    }
})
againButton.addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent=''
    guessInput.textContent=''
    console.log(`Secret number is ${secretNumber}`);

})
