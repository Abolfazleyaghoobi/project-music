// const bait = ["از من مخواه شعری تر ای بی خبر زه درد", "شعری که از آن خون نچکد ننگ دفتر است"];
// =====================================================================================
const text = "Nafez.com";
const container = document.getElementById("textAnime");
let index = 0;
let delay = 600; // تأخیر بین هر حرف به میلی‌ثانیه

function animateText() {
    if (index < text.length) {
        const span = document.createElement("span");
        span.textContent = text[index];
        container.appendChild(span);
        
        index++;
    } else {
        // وقتی به انتهای متن رسیدیم، دوباره از ابتدا شروع می‌کنیم
        index = 0;
        container.textContent = ""; // محتویات قبلی را پاک می‌کنیم
    }
}

// اجرای انیمیشن به صورت دوره‌ای
setInterval(animateText, delay);


const text1 = "Nafez.com";
const container1 = document.getElementById("textAnimee");
let index1 = 0;
let delay1 = 600; // تأخیر بین هر حرف به میلی‌ثانیه

function animateText1() {
    if (index1 < text1.length) {
        const span1 = document.createElement("span");
        span1.textContent = text1[index1];
        container1.appendChild(span1);
        
        index1++;
    } else {
        // وقتی به انتهای متن رسیدیم، دوباره از ابتدا شروع می‌کنیم
        index1 = 0;
        container1.textContent = ""; // محتویات قبلی را پاک می‌کنیم
    }
}

// اجرای انیمیشن به صورت دوره‌ای
setInterval(animateText1, delay);
// --------------------------------------------------------------------------------------


