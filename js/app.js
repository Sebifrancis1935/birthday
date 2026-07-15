const terminal = document.getElementById("terminalText");

const progressContainer = document.getElementById("progressContainer");

const progressBar = document.getElementById("progressBar");

const decryptBtn = document.getElementById("decryptBtn");

const lines = [

"Initializing Mission Control...",

"Loading Artificial Intelligence...",

"Connecting Secure Database...",

"Searching Employee Records...",

"Searching...",

"Searching...",

"Searching...",

"",

"1 MATCH FOUND",

"",

"Classification : TOP SECRET",

"",

"Preparing Secure Decryption..."

];

let currentLine = 0;

function typeLines(){

if(currentLine>=lines.length){

showProgress();

return;

}

const div=document.createElement("div");

terminal.appendChild(div);

const text=lines[currentLine];

let char=0;

const typing=setInterval(()=>{

div.textContent=text.substring(0,char);

char++;

if(char>text.length){

clearInterval(typing);

currentLine++;

setTimeout(typeLines,300);

}

},30);

}

typeLines();

function showProgress(){

progressContainer.style.display="block";

let width=0;

const loading=setInterval(()=>{

width++;

progressBar.style.width=width+"%";

if(width>=100){

clearInterval(loading);

decryptBtn.style.display="inline-block";

gsap.from(decryptBtn,{

opacity:0,

y:40,

duration:1

});

}

},25);

}

decryptBtn.addEventListener("click",()=>{

gsap.to(".terminal",{

scale:.92,

opacity:0,

duration:1,

onComplete:()=>{

document.body.innerHTML=`

<div style="display:flex;

justify-content:center;

align-items:center;

height:100vh;

font-family:Inter;

background:#050816;

color:white;

flex-direction:column;">

<h1 style="font-size:60px;

color:#00d4ff;">

ACCESS GRANTED

</h1>

<h2>

Welcome,

Santhiyakka ❤️

</h2>

<p style="margin-top:20px;

font-size:22px;">

Mission Successfully Decrypted

</p>

</div>

`;

}

});

});