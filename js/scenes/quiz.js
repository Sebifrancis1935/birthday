function loadQuizScene() {

const output = document.getElementById("output");

output.innerHTML = `

<div class="scene quiz-page">

<h1>🧠 AI Compatibility Test</h1>

<p class="quiz-sub">
Let's see how well you know Agent Santhiyakka...
</p>

<div id="quizContainer"></div>

</div>

`;

showQuestion(0);

}

const questions = [

{
question:"What does Sebi usually call me?",
options:[
"Santhi",
"Akka ❤️",
"Sandy",
"Madam"
],
answer:[1]
},

{
question:"What do I usually call Sebi?",
options:[
"Sebi ❤️",
"Thambi ❤️",
"Dude",
"Boss"
],
answer:[0,1]
},

{
question:"Which phrase do I say the most?",
options:[
"Good Morning",
"Ey Loosu 😂",
"Let's Go",
"Finish the Work"
],
answer:[1]
},

{
question:"Which memory always makes us laugh?",
options:[
"Printer Error",
"Blue Lay's",
"Fevi Stik Incident 😂",
"Coffee Break"
],
answer:[2]
},

{
question:"When Sebi was feeling low, what did I do?",
options:[
"I ignored him",
"I stayed and talked until he felt better ❤️",
"I told someone else",
"I went home"
],
answer:[1]
},

{
question:"Which snack is most likely to make me smile?",
options:[
"Pizza",
"Blue Lay's 💙",
"Burger",
"Chocolate"
],
answer:[1]
},

{
    question: "🤖 Final Verification\n\nCan Sebi continue calling me \"Santhiyakka\" for many more years? ❤️",
    options: [
        "❤️ Yes",
        "💙 Of Course",
        "😊 Always",
        "🤗 He doesn't even need permission"
    ],
    answer: [0,1,2,3]
}

];
let score=0;

function showQuestion(index){

const container=document.getElementById("quizContainer");

const q=questions[index];

container.innerHTML=`

<div class="quiz-card">

<h2>

Question ${index+1} / ${questions.length}

</h2>

<p class="question">

${q.question}

</p>

<div class="options">

${q.options.map((option,i)=>`

<button class="option-btn"

onclick="checkAnswer(${index},${i})">

${option}

</button>

`).join("")}

</div>

</div>

`;

}
function checkAnswer(questionIndex, selected){

    const answers = questions[questionIndex].answer;

    if(Array.isArray(answers)){
        if(answers.includes(selected)){
            score++;
        }
    }else{
        if(selected === answers){
            score++;
        }
    }

    if(questionIndex + 1 < questions.length){

        showQuestion(questionIndex + 1);

    }else{

        showResult();

    }

}
function showResult(){

const container=document.getElementById("quizContainer");

container.innerHTML=`

<div class="quiz-result">

<h1>🤖 AI Final Report</h1>

<h2>Authentication Complete</h2>

<div class="result-box">

<p>Scanning memories...</p>

<p>Checking laughter...</p>

<p>Checking trust...</p>

<p>Checking countless conversations...</p>

<hr>

<h2 style="color:#00D4FF;">
Authentication Complete
</h2>

<p>
This quiz was never about getting the correct answers.
</p>

<p>
It was about proving one thing...
</p>

<h2 style="color:#52FFA8;">
Agent Sebi never found
just another colleague.
</h2>

<h2 style="color:#00D4FF;">
He found
his Santhiyakka.
❤️
</h2>

<p>
Relationship Verified
</p>

<h2 style="color:#FFD54F;">
Brother 🤝 Sister
</h2>

<p>
Mission Status :
AUTHENTIC
</p>

</div>

<button class="primary-btn"

id="continueLetter">

Continue →

</button>

</div>

`;

document
.getElementById("continueLetter")
.onclick=()=>{

loadLetterScene();

};

}