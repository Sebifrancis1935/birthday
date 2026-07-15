const awards = [

{
icon:"👑",
title:"World's Best Akka",
description:"Awarded for always treating people with kindness, care and love."
},

{
icon:"🔥",
title:"Phoenix Award",
description:"For rising stronger after every challenge life has thrown at you."
},

{
icon:"💙",
title:"Strongest Shoulder",
description:"For always being there whenever someone needed support."
},

{
icon:"🦸‍♀️",
title:"Wonder Woman",
description:"For being independent, fearless and inspiring everyone around you."
},

{
icon:"😂",
title:"Master of 'Ey Loosu'",
description:"Because no one says it better than Santhiyakka."
},

{
icon:"🤝",
title:"Best Teammate",
description:"For making work easier, happier and full of positive energy."
}

];

let awardIndex = 0;

function loadAwardsScene(){

const output = document.getElementById("output");

output.innerHTML = `

<div class="scene awards">

<div class="awards-header">

<h1>🏆 AI Awards Ceremony</h1>

<p>

After scanning over

<b>8,547,392</b>

humans...

</p>

<p>

Only one person earned these awards.

</p>

</div>

<div id="awardContainer"></div>

</div>

`;

unlockAward();

}
function unlockAward(){

    const container=document.getElementById("awardContainer");

    const award=awards[awardIndex];

    const card=document.createElement("div");

    card.className="award-card";

    card.innerHTML=`

        <div class="award-icon">

            ${award.icon}

        </div>

        <h2>${award.title}</h2>

        <p>${award.description}</p>

    `;

container.appendChild(card);

card.scrollIntoView({

    behavior:"smooth",

    block:"center"

});

requestAnimationFrame(()=>{

    card.classList.add("show");

});

    awardIndex++;

    const btn=document.createElement("button");

    btn.className="primary-btn";

    btn.style.marginTop="10px";

    if(awardIndex<awards.length){

        btn.innerHTML="🏆 Unlock Next Award";

        btn.onclick=()=>{

            btn.remove();

            unlockAward();

        };

    }else{

        btn.innerHTML="Continue Mission →";

        btn.onclick=()=>{
    
        loadQuizScene();

    };

    }

    container.appendChild(btn);

}