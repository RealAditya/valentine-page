const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const question = document.getElementById("question");

let noClickCount = 0;
const messages = [
    "Please? 🥺",
    "Pretty please? 😣",
    "Chalo Maan jaao na 😭",
    "Arre Please meaning 🥰",
    "You're breaking my heart! 💔",
    "Kaisi si aurat ho yaar tum 😣",
    "Baadtameez aurat only one 🥰",
    "Arre Naachenge 🕺💃",
    "Gaayenge 🎙 ",
    "Ghoomenge Phirenge 🥺",
    "Aish Karenge aur kya 😎",
    "OK please now",
    "Mein mar jaunga yaar",
    "I'm ded now ☠️",
    "HI,  you are talking to Adi's ghost now 👻",
    "Arre soch ke dekho, sab jalenge", 
    "Last chance"
];

const repeatMessage = "Arre ab toh maan jao na 😭"; // This will repeat after the last message

yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html"; // Redirects to yes page
});

noBtn.addEventListener("click", () => {
    if (noClickCount < messages.length) {
        question.textContent = messages[noClickCount];
    } else {
        question.textContent = repeatMessage; // Keeps repeating this message
    }
    noClickCount++;

    // Make the "Yes" button bigger each time "No" is clicked
    let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 5) + "px";
});