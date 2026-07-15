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

            const btn=document.createElement("button");

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