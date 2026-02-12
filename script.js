const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

// ✅ ADD NUMBERS CODE HERE
const numbers = document.getElementById("numbers");
const radius = 130;

for (let i = 1; i <= 12; i++) {
    const num = document.createElement("span");
    num.innerText = i;

    const angle = (i - 3) * (Math.PI * 2) / 12;
    const x = 150 + radius * Math.cos(angle);
    const y = 150 + radius * Math.sin(angle);

    num.style.position = "absolute";
    num.style.left = x + "px";
    num.style.top = y + "px";
    num.style.transform = "translate(-50%, -50%)";

    numbers.appendChild(num);
}

function updateClock(){
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    const secDeg = sec * 6;
    const minDeg = min * 6 + sec * 0.1;
    const hrDeg = hr * 30 + min * 0.5;

    secondHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();