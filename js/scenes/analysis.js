function loadAnalysisScene() {

    const output = document.getElementById("output");

    output.innerHTML = `

    <div class="analysis">

        <h2>🤖 AI Personality Analysis</h2>

        <p class="analysis-sub">
            Running Deep Personality Scan...
        </p>

        ${createMeter("💙 Kindness","kindnessBar","kVal")}
        ${createMeter("🤝 Supportiveness","supportBar","sVal")}
        ${createMeter("😊 Patience","patienceBar","pVal")}
        ${createMeter("📚 Reading Habit","readingBar","rVal")}
        ${createMeter("🥔 Blue Lay's Love","laysBar","lVal")}

        <div id="analysisResult"></div>

        <button id="nextScene">
            Continue →
        </button>

    </div>

    `;

    animateBars();

}

function createMeter(title,barId,labelId){

return `

<div class="meter">

<div class="meter-title">

<span>${title}</span>

<span id="${labelId}">0%</span>

</div>

<div class="bar">

<div class="fill" id="${barId}"></div>

</div>

</div>

`;

}

function animateBar(barId,labelId,target){

    const bar=document.getElementById(barId);
    const label=document.getElementById(labelId);

    if(!bar || !label){
        console.error(barId + " not found");
        return;
    }

    let value=0;

    const timer=setInterval(()=>{

        value++;

        bar.style.width=value + "%";

        label.textContent=value + "%";

        if(value>=target){

            clearInterval(timer);

        }

    },15);

}

function animateBars() {

    const bars = [
        { bar: "kindnessBar", label: "kVal", value: 100 },
        { bar: "supportBar", label: "sVal", value: 100 },
        { bar: "patienceBar", label: "pVal", value: 98 },
        { bar: "readingBar", label: "rVal", value: 92 },
        { bar: "laysBar", label: "lVal", value: 99 }
    ];

    bars.forEach((item, index) => {

        setTimeout(() => {

            animateBar(item.bar, item.label, item.value);

        }, index * 250);

    });

    setTimeout(showAIReport, 2000);

    document.getElementById("nextScene").onclick = () => {

        alert("Timeline Module");

    };

}

function showAIReport(){

const report=document.getElementById("analysisResult");

report.innerHTML=`

<div class="ai-result">

<h3>🤖 AI REPORT</h3>

<p>

After analysing over

<strong>8,547,392</strong>

humans...

</p>

<p>

Only one person matches this profile.

</p>

<h2 class="best-akka">

❤️ Santhiyakka ❤️

</h2>

<p>

Status : World's Best Akka

</p>

</div>

`;

report.scrollIntoView({

behavior:"smooth",

block:"nearest"

});

}