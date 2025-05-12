const img = document.getElementById("logo");
const images = ["img/logo.png", "img/logo-2.png"];
let i = 0, timer;

img.onmouseenter = () => {
    timer = setInterval(() => {
        i = 1 - i;
        img.src = images[i];
    }, 500);
};

img.onmouseleave = () => {
    clearInterval(timer);
    img.src = images[0]; // 回到第一張
    i = 0;
};