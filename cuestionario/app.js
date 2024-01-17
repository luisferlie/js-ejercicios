const quizData = [
    {
        question: "que proramacion es la mas usada en 2024",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "quien es presidente de  USA?",
        a: "Florin Pop",
        b: "Joe Biden",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "Que significa HTML?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "coches de lujo",
        correct: "a",
    },
    {
        question: "Cuando se lanzó JavaScript ?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl =document.getElementById('question')
const a_quest=document.getElementById('a_text')
const b_quest=document.getElementById('b_text')
const c_quest=document.getElementById('c_text')
const d_quest=document.getElementById('d_text')

const submitBtn=document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const q=quizData[currentQuiz]
    console.log(q)
    questionEl.innerHTML=q.question
    a_quest.textContent=q.a
    console.log(q.a)
    b_quest.textContent=q.b
    c_quest.textContent=q.c
    d_quest.textContent=q.d
    
    questionEl.textContent=q.question

}
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}
submitBtn.addEventListener("click", ()=>{
    const answer=getSelected();
    if(answer){
        //checking the answer
        if(answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>contestaste correctamente a ${score}/${quizData.length} preguntas</h2>
                
                <button onclick="location.reload()">volver a realizar</button>
            `;
        }
    }
})



