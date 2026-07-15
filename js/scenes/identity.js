function loadIdentityScene() {

    const output = document.getElementById("output");

    output.innerHTML = `

    <div class="identity-container">

        <div class="scan-circle">

            <div class="scanner"></div>

            <div class="scan-text">

                AI SCANNING

            </div>

        </div>

        <div class="progress-text">

            Initializing Scan...

        </div>

        <div class="scan-progress">

            <div id="scanBar"></div>

        </div>

    </div>

    `;

    const bar = document.getElementById("scanBar");
    const text = document.querySelector(".progress-text");

    const steps = [
        "Loading Facial Recognition...",
        "Checking Employee Database...",
        "Searching...",
        "Searching...",
        "Matching Personality...",
        "Identity Confirmed"
    ];

    let width = 0;
    let step = 0;

    const timer = setInterval(() => {

        width++;

        bar.style.width = width + "%";

        if (width % 18 === 0 && step < steps.length) {

            text.innerHTML = steps[step];
            step++;

        }

        if (width >= 100) {

            clearInterval(timer);

            setTimeout(showIdentityCard,700);

        }

    },40);

}
function showIdentityCard(){

const output=document.getElementById("output");

output.innerHTML = `

<div class="identity-container">

<div class="identity-card">

<div class="profile-photo">
👩
</div>

<h2>Santhiya Mahalingam</h2>

<strong>Alias:</strong> Santhiyakka

<strong>Age:</strong> 25

<strong>Role:</strong> Wonder Woman ❤️

<strong>Mission Status:</strong> Verified ✅

<strong>Success Probability:</strong> 100%

<button id="continueMission">
Continue Mission →
</button>

</div>

</div>

`;

document.getElementById("continueMission")

.addEventListener("click",()=>{

loadAnalysisScene();

});

}