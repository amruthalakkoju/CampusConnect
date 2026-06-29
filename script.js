// ===============================
// Sticky Navbar Shadow
// ===============================
// ===============================
// Authentication Check
// ===============================

/*const currentPage = window.location.pathname.split("/").pop();

const publicPages = ["login.html"];

if (!publicPages.includes(currentPage)) {

    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn !== "true") {

        window.location.href = "login.html";

    }

}
*/
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
    }

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".stat h2");

const speed = 100;

const startCounter = (counter) => {

    const target = counter.innerText.replace("+", "");
    const number = parseInt(target);

    let count = 0;

    const update = () => {

        const increment = Math.ceil(number / speed);

        if (count < number) {

            count += increment;

            counter.innerText = count + "+";

            requestAnimationFrame(update);

        } else {

            counter.innerText = number + "+";

        }

    };

    update();

};

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
    ".feature, .card, .stat, .dashboard-card"
);

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.7s ease";

});

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

revealElements.forEach(el => revealObserver.observe(el));

// ===============================
// Smooth Button Click Effect
// ===============================

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn, .login-btn");

buttons.forEach(button => {

    button.addEventListener("mousedown", () => {

        button.style.transform = "scale(0.96)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform = "scale(1)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// ===============================
// Dashboard Card Hover Glow
// ===============================

const dashboardCards = document.querySelectorAll(".dashboard-card");

dashboardCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 10px 25px rgba(79,70,229,0.2)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});

// ===============================
// Current Year in Footer
// ===============================

const footer = document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} CampusConnect. All Rights Reserved.`;

}
// =======================================
// Announcement Search
// =======================================

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".announcement-card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// =======================================
// Filter Buttons
// =======================================

const filters=document.querySelectorAll(".filter");

filters.forEach(button=>{

button.addEventListener("click",()=>{

filters.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

});

});

// =======================================
// Read More
// =======================================

const readButtons=document.querySelectorAll(".card-footer button");

readButtons.forEach(button=>{

button.addEventListener("click",()=>{

alert("Full announcement details will be displayed here.");

});

});

// =======================================
// Card Hover Animation
// =======================================

const cards=document.querySelectorAll(".announcement-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 20px 40px rgba(79,70,229,.15)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 10px 25px rgba(0,0,0,.06)";

});

});
// =========================
// LOGIN FORM
// =========================
// ===============================
// LOGIN & LOGOUT
// ===============================

// Handle Login
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // Save login status
        localStorage.setItem("loggedIn", "true");

        // Go to homepage
        window.location.href = "index.html";

    });

}

// Change Login button to Logout
const loginBtn = document.querySelector(".login-btn");

if (loginBtn && localStorage.getItem("loggedIn") === "true") {

    loginBtn.textContent = "Logout";
    loginBtn.href = "#";

    loginBtn.addEventListener("click", function (e) {

        e.preventDefault();

        localStorage.removeItem("loggedIn");

        window.location.href = "login.html";

    });

}

// Protect pages
const currentPage = window.location.pathname.split("/").pop();

if (
    currentPage !== "login.html" &&
    localStorage.getItem("loggedIn") !== "true"
) {

    window.location.href = "login.html";

}
// ===============================
// TEAM FINDER
// ===============================

const teamSearch = document.getElementById("teamSearch");

if (teamSearch) {

    teamSearch.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".team-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

const joinButtons = document.querySelectorAll(".join-btn");

joinButtons.forEach(button => {

    button.addEventListener("click", function () {

        this.innerText = "Request Sent ✔";

        this.style.background = "#10B981";

        this.disabled = true;

    });

});
// ===============================
// LOST & FOUND SEARCH
// ===============================

const itemSearch = document.getElementById("itemSearch");

if(itemSearch){

itemSearch.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".lost-card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// ===============================
// CONTACT BUTTON
// ===============================

const contactButtons=document.querySelectorAll(".contact-btn");

contactButtons.forEach(button=>{

button.addEventListener("click",function(){

this.innerText="Request Sent ✔";

this.style.background="#10B981";

this.disabled=true;

});

});
// ===============================
// REPORT LOST / FOUND
// ===============================

const openModal = document.getElementById("openModal");
const modal = document.getElementById("reportModal");
const closeModal = document.querySelector(".close");
const reportForm = document.getElementById("reportForm");
const lostGrid = document.querySelector(".lost-grid");

if(openModal){

openModal.onclick = () =>{

modal.style.display="flex";

}

}

if(closeModal){

closeModal.onclick = () =>{

modal.style.display="none";

}

}

window.onclick = (e)=>{

if(e.target===modal){

modal.style.display="none";

}

}

if(reportForm){

reportForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("itemName").value;

const status=document.getElementById("itemStatus").value;

const location=document.getElementById("itemLocation").value;

const desc=document.getElementById("itemDescription").value;

const icon=status==="Lost"
? "fa-wallet"
: "fa-box";

const color=status==="Lost"
? "lost"
: "found";

const btnText=status==="Lost"
? "Contact Owner"
: "Claim Item";

const card=document.createElement("div");

card.className="lost-card";

card.innerHTML=`

<div class="lost-icon">

<i class="fa-solid ${icon}"></i>

</div>

<h3>${name}</h3>

<p>${desc}<br><strong>Location:</strong> ${location}</p>

<span class="status ${color}">${status}</span>

<button class="contact-btn">${btnText}</button>

`;

lostGrid.prepend(card);

modal.style.display="none";

reportForm.reset();

});
}