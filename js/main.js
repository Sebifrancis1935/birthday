const output = document.getElementById("output");

const bootSequence = [

"> Initializing Mission Control",

"> Loading AI Core",

"> Connecting Secure Database",

"> Establishing Encrypted Channel",

"> Scanning Employee Records",

">",

"> Searching...",

"> Searching...",

"> Searching...",

">",

"> MATCH FOUND",

">",

"> Classification : TOP SECRET",

">",

"> Mission File Locked",

">",

"> Awaiting Decryption..."

];

let line = 0;

function typeNextLine(){

    if(line >= bootSequence.length){

        showDecryptButton();

        return;

    }

    const div=document.createElement("div");

    output.appendChild(div);
    div.scrollIntoView({
    behavior: "smooth",
    block: "end"
});

    const text=bootSequence[line];

    let char=0;

    const timer=setInterval(()=>{

        div.textContent=text.substring(0,char);

        char++;

        if(char>text.length){

            clearInterval(timer);

            line++;

            setTimeout(typeNextLine,250);

        }

    },28);

}

typeNextLine();

function showDecryptButton(){

    const btn=document.createElement("button");

    btn.innerHTML="🔓 DECRYPT MISSION";

    btn.className="decrypt-btn";

    output.appendChild(btn);

    btn.scrollIntoView({
    behavior: "smooth",
    block: "end"
});

    btn.style.marginTop="30px";

    btn.style.padding="15px 30px";

    btn.style.background="#00D4FF";

    btn.style.border="none";

    btn.style.borderRadius="12px";

    btn.style.fontWeight="700";

    btn.style.cursor="pointer";

    btn.style.fontSize="18px";

    btn.style.transition=".3s";

    btn.onmouseenter=()=>{

        btn.style.transform="scale(1.05)";

        btn.style.boxShadow="0 0 25px #00D4FF";

    };

    btn.onmouseleave=()=>{

        btn.style.transform="scale(1)";

        btn.style.boxShadow="none";

    };

btn.onclick = () => {

    document.querySelector(".terminal").style.animation =
        "fadeOut .8s forwards";

    setTimeout(() => {

        document.querySelector(".terminal")
            .style.animation = "fadeIn .8s";

        loadDashboard();

    },800);

};

}