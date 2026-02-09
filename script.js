// ---------- PAGE CONTROL ----------
function show(page){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(page).classList.add("active");
}

function goPage2(){ show("page2"); }
function goPage3(){ show("page3"); }
function goPage4(){ show("page4"); }

// ---------- RUNAWAY NO BUTTON ----------
function runAway(id){
const btn=document.getElementById(id);
const x=Math.random()*(window.innerWidth-120);
const y=Math.random()*(window.innerHeight-60);
btn.style.position="absolute";
btn.style.left=x+"px";
btn.style.top=y+"px";
}

// ---------- FLOATING HEARTS ----------
const heartsContainer=document.querySelector(".hearts");

setInterval(()=>{
const heart=document.createElement("div");
heart.classList.add("heart");
heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(5+Math.random()*5)+"s";
heartsContainer.appendChild(heart);
setTimeout(()=>{heart.remove();},10000);
},500);

// ---------- NAME TYPING ANIMATION ----------
const nameText = "Sameer...";
let i = 0;

function typeName(){
if(i < nameText.length){
document.getElementById("nameTyping").innerHTML += nameText.charAt(i);
i++;
setTimeout(typeName, 120);
}
}
typeName();

// ---------- MUSIC ----------
function playMusic(){
const music=document.getElementById("bgMusic");
music.play();
}

