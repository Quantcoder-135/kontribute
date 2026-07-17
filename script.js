/* ==========================
      CONTRIB DASHBOARD
========================== */

document.addEventListener("DOMContentLoaded", () => {

    animateStats();

    initializeCards();

    initializePayments();

    initializeHeroButton();

    initializeNotifications();

    initializeSearch();

    initializeSidebar();

    animatePanels();

    startLiveActivity();

});

/* ==========================
      STAT COUNTER
========================== */

function animateStats(){

    const stats=document.querySelectorAll(".stat-card h2");

    stats.forEach(stat=>{

        const value=stat.innerText;

        // Skip money values for now
        if(value.includes("₦")) return;

        const target=parseInt(value);

        let count=0;

        const speed=Math.max(15,target/30);

        const interval=setInterval(()=>{

            count++;

            stat.innerText=count;

            if(count>=target){

                stat.innerText=target;

                clearInterval(interval);

            }

        },speed);

    });

}

/* ==========================
      QUICK ACTIONS
========================== */

function initializeCards(){

    document.querySelectorAll(".action").forEach(card=>{

        card.addEventListener("click",()=>{

            const title=card.innerText.trim();

            console.log(title + " clicked");

        });

    });

}

/* ==========================
      HERO BUTTON
========================== */

function initializeHeroButton(){

    const btn=document.querySelector(".hero button");

    btn.addEventListener("click",()=>{

        console.log("Open Create Circle");

    });

}

/* ==========================
      PAYMENT BUTTONS
========================== */

function initializePayments(){

    document.querySelectorAll(".payment button").forEach(button=>{

        button.addEventListener("click",()=>{

            button.innerText="Approved";

            button.classList.add("approved");

            button.disabled=true;

        });

    });

}

/* ==========================
      NOTIFICATION BELL
========================== */

function initializeNotifications(){

    const bell=document.querySelector(".notify");

    bell.addEventListener("click",()=>{

        console.log("Notifications opened");

    });

}

/* ==========================
      SEARCH
========================== */

function initializeSearch(){

    const input=document.querySelector(".search input");

    input.addEventListener("keypress",(e)=>{

        if(e.key==="Enter"){

            console.log("Searching:", input.value);

        }

    });

}

/* ==========================
      SIDEBAR
========================== */

function initializeSidebar(){

    const menu = document.querySelector(".mobile-menu");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    const icon = menu.querySelector("i");

    if(!menu || !sidebar || !overlay) return;

    // Open / Close menu
    menu.addEventListener("click", () => {

        sidebar.classList.toggle("showSidebar");
        overlay.classList.toggle("show");

        if(sidebar.classList.contains("showSidebar")){

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            document.body.style.overflow="hidden";

        }else{

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            document.body.style.overflow="auto";

        }

    });

    // Close when clicking overlay
    overlay.addEventListener("click", () => {

        sidebar.classList.remove("showSidebar");
        overlay.classList.remove("show");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        document.body.style.overflow="auto";

    });

    // Close with ESC key
    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            sidebar.classList.remove("showSidebar");
            overlay.classList.remove("show");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            document.body.style.overflow="auto";

        }

    });

}

/* ==========================
      FADE IN PANELS
========================== */

function animatePanels(){

    const panels=document.querySelectorAll(".panel,.stat-card,.action,.hero");

    panels.forEach((panel,index)=>{

        panel.style.opacity="0";
        panel.style.transform="translateY(25px)";

        setTimeout(()=>{

            panel.style.transition=".6s ease";
            panel.style.opacity="1";
            panel.style.transform="translateY(0px)";

        },index*100);

    });

}

/* ==========================
      LIVE ACTIVITY
========================== */

const activities=[

    "✔ Sarah paid ₦50,000",

    "✔ Daniel joined Teachers Cooperative",

    "✔ Abuja Circle reached 20 Members",

    "✔ Payout sent to Grace",

    "✔ New review received ⭐⭐⭐⭐⭐",

    "✔ Monthly cycle completed",

    "✔ New Contribution Circle Created",

    "✔ Member invited successfully"

];

function startLiveActivity(){

    const list=document.querySelector(".activity ul");

    if(!list) return;

    setInterval(()=>{

        const random=activities[Math.floor(Math.random()*activities.length)];

        const li=document.createElement("li");

        li.innerHTML=`
            <span>${random}</span>
            <small>Just now</small>
        `;

        li.style.opacity="0";
        li.style.transform="translateY(-10px)";

        list.prepend(li);

        setTimeout(()=>{

            li.style.transition=".4s";
            li.style.opacity="1";
            li.style.transform="translateY(0px)";

        },100);

        if(list.children.length>6){

            list.removeChild(list.lastElementChild);

        }

    },7000);

}

/* ==========================
      LOGO
========================== */

document.querySelector(".logo").addEventListener("click",()=>{

    console.log("Contrib Home");

});

/* ==========================
        THEME TOGGLE
========================== */

const themeSwitch=document.getElementById("theme-switch");

if(themeSwitch){

    // Load saved theme
    if(localStorage.getItem("theme")==="light"){

        document.body.classList.add("light-theme");
        themeSwitch.checked=true;

    }

    // Toggle theme
    themeSwitch.addEventListener("change",()=>{

        document.body.classList.toggle("light-theme");

        if(document.body.classList.contains("light-theme")){

            localStorage.setItem("theme","light");

        }else{

            localStorage.setItem("theme","dark");

        }

    });

}