function loadLetterScene() {

const output = document.getElementById("output");

output.innerHTML = `

<div class="scene letter-page">

<h1>💌 Confidential Letter</h1>

<p class="letter-sub">

Hidden File Recovered...

</p>

<div class="letter-card">

<div id="letterText"></div>

</div>

<div id="letterButton"></div>

</div>

`;

typeLetter();

}
const letterLines = [

"Dear Santhiyakka ❤️,",

"",

"Happy 25th Birthday.",

"",

"I don't even know where to begin...",

"",

"When I first met you on",

"26 December 2024,",

"I never imagined",

"that one day",

"I would call you",

'"Akka".',

"",

"You slowly became",

"more than just a colleague.",

"",

"You became",

"someone I could trust.",

"",

"When I was feeling low,",

"you stayed...",

"you listened...",

"and you told me",

'"I will be there whenever you need me."',

"",

"That moment",

"is something",

"I will never forget.",

"",

"You have always been",

"kind...",

"strong...",

"independent...",

"and someone",

"people can rely on.",

"",

"To me,",

"you are",

"My Wonder Woman.",

"",

"Thank you",

"for every smile...",

"every laugh...",

"every",

'"Ey Loosu..." 😂',

"",

"Thank you",

"for accepting me",

"as your",

'"Thambi".',

"",

"I genuinely hope",

"this birthday",

"brings you",

"all the happiness",

"you deserve.",

"",

"Keep smiling.",

"Keep shining.",

"Keep being",

"the amazing person",

"you already are.",

"",

"Happy Birthday",

"Santhiyakka ❤️",

"",

"— Sebi"

];
let currentLine = 0;

function typeLetter(){

const container = document.getElementById("letterText");

function next(){

if(currentLine >= letterLines.length){

document.getElementById("letterButton").innerHTML = `

<button
class="primary-btn"
onclick="loadCelebrationScene()">

🎂 Continue

</button>

`;

return;

}

const p = document.createElement("p");

p.className = "letter-line";

container.appendChild(p);

typeText(p,letterLines[currentLine],0,()=>{

currentLine++;

setTimeout(next,220);

});

container.scrollTop = container.scrollHeight;

}

next();

}
function typeText(element,text,index,callback){

if(index < text.length){

element.innerHTML += text.charAt(index);

setTimeout(()=>{

typeText(element,text,index+1,callback);

},25);

}
else{

callback();

}

}