function loadTimelineScene(){

    const output = document.getElementById("output");

    output.innerHTML = `

    <div class="timeline-page">

        <h1 class="timeline-title">

            📅 Mission Timeline

        </h1>

        <p class="timeline-sub">

            AI recovered these precious memories...

        </p>

        <div class="timeline">

            ${timelineCard(
                "26 Dec 2024",
                "Mission Started",
                "Two colleagues met for the first time. The system marked this as the beginning of Operation Santhiyakka."
            )}

            ${timelineCard(
                "One Difficult Day",
                "Support",
                "When Sebi felt low, Santhiyakka stayed, listened, and said, 'I'll be there whenever you need me.' That promise was never forgotten."
            )}

            ${timelineCard(
                "Legendary Moment 😂",
                "Fevi Stik Incident",
                "Someone was joking about Akka. Sebi replied, 'Do you want me to put Fevi Stik on your mouth?' Everyone laughed, especially Santhiyakka."
            )}

            ${timelineCard(
                "19 Months",
                "Teammates",
                "From solving tickets to sharing conversations, the journey became full of respect, trust, and laughter."
            )}

            ${timelineCard(
                "16 July 2026",
                "Today",
                "Today isn't about work. It's about celebrating someone who inspires the people around her."
            )}

        </div>

        <button id="timelineNext" class="primary-btn">

            Continue →

        </button>

    </div>

    `;

    document.getElementById("timelineNext").onclick=()=>{

        alert("Module 7 - Awards");

    };

}

function timelineCard(date,title,text){

return`

<div class="timeline-card">

<div class="timeline-dot"></div>

<div class="timeline-content">

<h3>${date}</h3>

<h2>${title}</h2>

<p>${text}</p>

</div>

</div>

`;

}