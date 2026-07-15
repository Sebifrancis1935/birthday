function loadCelebrationScene(){

    const output = document.getElementById("output");

    output.innerHTML = `

    <div class="scene celebration-page">

        <div id="missionComplete">

            <h1 class="mission-title">
                🤖 AI FINAL REPORT
            </h1>

            <div class="mission-progress">

                <div id="missionFill"></div>

            </div>

            <h2 id="missionPercent">

                0%

            </h2>

            <p id="missionStatus">

                Completing Mission...

            </p>

        </div>

    </div>

    `;

    animateMissionComplete();

}
function animateMissionComplete(){

    const fill=document.getElementById("missionFill");

    const percent=document.getElementById("missionPercent");

    const status=document.getElementById("missionStatus");

    let value=0;

    const timer=setInterval(()=>{

        value++;

        fill.style.width=value+"%";

        percent.innerHTML=value+"%";

        if(value==25){

            status.innerHTML="Recovering Final Report...";

        }

        if(value==50){

            status.innerHTML="Checking Mission Data...";

        }

        if(value==75){

            status.innerHTML="Generating Celebration...";

        }

        if(value>=100){

            clearInterval(timer);

            status.innerHTML="Mission Complete ✅";

            setTimeout(showBirthdayReveal,1800);

        }

    },30);

}

function showBirthdayReveal(){

    const output=document.getElementById("output");

    output.innerHTML=`

<div class="birthday-reveal">

<div class="birthday-glow"></div>

<h2>

MISSION SUCCESSFUL

</h2>

<h1>

🎉 HAPPY BIRTHDAY

</h1>

<h1 class="birthday-name">

SANTHIYAKKA ❤️

</h1>

<p>

Today isn't about work.

Today isn't about tickets.

Today is about celebrating

someone truly special.

</p>

<div id="wishContainer"></div>

<button
id="celebrateBtn"
class="primary-btn">

🎂 Celebrate

</button>

</div>

`;

startBirthdayWishes();

document
.getElementById("celebrateBtn")
.onclick=()=>{

launchCelebration();

};

}
const wishes=[

"💙 May your smile never fade.",

"🌸 May every dream come true.",

"⭐ Keep inspiring everyone around you.",

"🦸 Stay the Wonder Woman you are.",

"😊 Never stop saying 'Ey Loosu'. 😂",

"❤️ Happy Birthday Santhiyakka."

];

function startBirthdayWishes(){

const container=document.getElementById("wishContainer");

let i=0;

const timer=setInterval(()=>{

if(i>=wishes.length){

clearInterval(timer);

return;

}

const p=document.createElement("p");

p.className="wish";

p.innerHTML=wishes[i];

container.appendChild(p);

p.classList.add("show");

i++;

},900);

}
function launchCelebration(){

    document.body.classList.add("celebration-mode");

    createConfetti();

}

function createConfetti(){

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.animationDelay=(Math.random()*3)+"s";

        piece.style.animationDuration=(4+Math.random()*3)+"s";

        piece.style.background=colors[
            Math.floor(Math.random()*colors.length)
        ];

        document.body.appendChild(piece);

    }

}
const colors=[
"#00D4FF",
"#6C63FF",
"#FFD54F",
"#FF5E7A",
"#52FFA8",
"#FFFFFF"
];