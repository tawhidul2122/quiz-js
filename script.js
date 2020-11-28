
const questions = [
    {
        question: "What is Athena's favorite animal?",
        options: ["jellyfish", "penguins", "otters"],
        answer: "otters"
    },
    {
        question: "What is 10 + 10?",
        options: ["8", "20", "28", "30"],
        answer: "20"
    },
    {
        question: "How many SuperBowl rings does Tom Brady have?",
        options: ["2", "5", "0", "3"],
        answer: "5"
    },
    {
        question: "How many championships do the Celtics have?",
        options: ["17", "6", "0", "10"],
        answer: "17"
    },
    {
        question: "Marvel or DC?",
        options: ["Marvel, no question", "DC, for some reason"],
        answer: "Marvel, no question"
    }
];

let selected_questions = questions.sort(() => .5 - Math.random()).slice(0,4)

let question_number = 0;
let correct = 0;
 
document.addEventListener("DOMContentLoaded", () => {
    load_question(), progress();
});
 
function load_question() {
    document.querySelector("#question").innerHTML = selected_questions[question_number].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for (const option of selected_questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
        
    }
 
    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            if (option.textContent == selected_questions[question_number].answer) {
                correct++;
            }
            question_number++;
            progress();
            if (question_number != selected_questions.length) { // I it's the last question, don't load question
                load_question();
            }
            else {
                complete();
            }        
        }
    });
 
}
function progress() {
    document.querySelector("#correct").innerHTML = `Questions correct: ${correct} of ${question_number}`;
}

function complete() {
    document.querySelector("#question").innerHTML = `Quiz complete! Refresh to restart!` 
    // Remove previous options
    const options = document.querySelector("#options");
    options.innerHTML = "";
    document.querySelector("#correct").innerHTML = `Final Score: ${correct} of ${question_number}`;
    document.querySelector("#correct").style.fontSize = "50px";
    if (correct == question_number) {
        document.querySelector("#options").innerHTML += `<div style="background-image: url(fireworks.gif); display: block; margin: auto; height: 400px; width: 400px;"></div>`
    }
}