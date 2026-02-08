const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionPage = document.getElementById("questionPage");
const lovePage = document.getElementById("lovePage");

/* NO button runs away */
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

/* YES button opens love page */
yesBtn.addEventListener("click", () => {
    questionPage.classList.add("hidden");
    lovePage.classList.remove("hidden");
});
