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

<canvas id="fireworksCanvas"></canvas>

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

    createHearts();

    createBalloons();

    startFireworks();

}

function createHearts(){

    const emojis=["💙","❤️","💜","✨"];

    for(let i=0;i<35;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=emojis[
            Math.floor(Math.random()*emojis.length)
        ];

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDelay=(Math.random()*5)+"s";

        heart.style.animationDuration=(6+Math.random()*3)+"s";

        document.body.appendChild(heart);

    }

}

function createBalloons(){

    const balloonColors=[

        "#00D4FF",

        "#6C63FF",

        "#FFD54F",

        "#FF5E7A",

        "#52FFA8"

    ];

    for(let i=0;i<20;i++){

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.style.left=Math.random()*100+"vw";

        balloon.style.background=
        balloonColors[
            Math.floor(Math.random()*balloonColors.length)
        ];

        balloon.style.animationDelay=(Math.random()*4)+"s";

        balloon.style.animationDuration=(10+Math.random()*4)+"s";

        document.body.appendChild(balloon);

    }

}

/* ==========================================
   FIREWORKS
========================================== */

function startFireworks() {

    const canvas = document.getElementById("fireworksCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];

    class Firework {

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.targetY = Math.random() * canvas.height * 0.45 + 80;

            this.particles = [];

            this.exploded = false;

            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {

            if (!this.exploded) {

                this.y -= 7;

                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();

                if (this.y <= this.targetY) {

                    this.exploded = true;

                    for (let i = 0; i < 60; i++) {

                        this.particles.push({

                            x: this.x,
                            y: this.y,

                            dx: (Math.random() - 0.5) * 8,
                            dy: (Math.random() - 0.5) * 8,

                            life: 100

                        });

                    }

                }

            } else {

                this.particles.forEach((p) => {

                    p.x += p.dx;
                    p.y += p.dy;

                    p.dy += 0.03;

                    p.life--;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.fill();

                });

                this.particles = this.particles.filter(p => p.life > 0);

            }

        }

    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.05) {

            fireworks.push(new Firework());

        }

        fireworks.forEach(f => f.update());

        requestAnimationFrame(animate);

    }

    animate();

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