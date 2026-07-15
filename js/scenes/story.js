function loadStoryScene(){

    const output = document.getElementById("output");

    output.innerHTML = `

    <div class="story-page">

        <h1 class="story-heading">
            📖 Mission Log
        </h1>

        <div id="storyContainer"></div>

    </div>

    `;

    const story=[

        "AI Log Entry #001",

        "",

        "Searching Historical Records...",

        "",

        "Mission Origin Found.",

        "",

        "26 December 2024",

        "",

        "Two colleagues met for the first time.",

        "",

        "The system had no idea...",

        "",

        "One day...",

        "",

        "One would proudly say",

        "",

        "\"Akka...\"",

        "",

        "And she would reply...",

        "",

        "\"Ey Loosu...\" 😂",

        "",

        "Mission Created.",

        "",

        "Operation Santhiyakka ❤️"

    ];

    typeStory(story);

}
function typeStory(lines){

    const container=document.getElementById("storyContainer");

    let i=0;

    function next(){

        if(i>=lines.length){

            showMissionArchiveLoader();

            btn.className="primary-btn";

            btn.innerHTML="Continue →";

            btn.onclick=()=>{

                loadTimelineScene();

            };

            container.appendChild(btn);

            return;

        }

        const div=document.createElement("div");

        div.className="storyLine";

        container.appendChild(div);

        const text=lines[i];

        let j=0;

        const timer=setInterval(()=>{

            div.textContent=text.substring(0,j);

            j++;

            if(j>text.length){

                clearInterval(timer);

                i++;

                div.scrollIntoView({

                    behavior:"smooth",

                    block:"end"

                });

                setTimeout(next,400);

            }

        },28);

    }

    next();

}

function showMissionArchiveLoader() {

    const output = document.getElementById("output");

    output.innerHTML = `

    <div class="archive-page">

        <h1 class="archive-title">
            🔐 Mission Archive
        </h1>

        <p class="archive-subtitle">
            Scanning Mission Archive...
        </p>

        <div class="archive-progress">

            <div id="archiveFill"></div>

        </div>

        <h2 id="archivePercent">0%</h2>

        <div id="archiveStatus"></div>

    </div>

    `;

    animateArchive();

}
function animateArchive(){

    const fill=document.getElementById("archiveFill");
    const percent=document.getElementById("archivePercent");
    const status=document.getElementById("archiveStatus");

    let value=0;

    const timer=setInterval(()=>{

        value++;

        fill.style.width=value+"%";
        percent.innerHTML=value+"%";

        if(value>=100){

            clearInterval(timer);

            setTimeout(()=>{

                status.innerHTML=`

                <div class="archive-complete">

                    <h2>✅ 5 Memories Found</h2>

                    <p>Archive Ready</p>

                    <button
                        id="openArchive"
                        class="primary-btn">

                        🔓 OPEN MISSION ARCHIVE

                    </button>

                </div>

                `;

                document
                .getElementById("openArchive")
                .onclick=()=>{

                    loadTimelineScene();

                };

            },400);

        }

    },18);

}