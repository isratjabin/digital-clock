window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM"

    if (h==0) {
        h = 12;
    }
    if (h>12) {
        h = h-12;
        session = "PM"
    }

    h = h < 10 ? (h = "0" + h) : h;
    m = m < 10 ? (m = "0" + m) : m;
    s = s < 10 ? (s = "0" + s) : s;

const time  =` ${h}:${m}<small>.${s}|${session}</small>`;

document.getElementById("DisplayClock").innerHTML = time;
setTimeout(showTime, 1000)

// Change body background

let bg;
const userName = "Israt";
const user = document.getElementById("User");

if (h < 8 && session==="AM") {
    bg = ` url(https://metro.co.uk/wp-content/uploads/2018/06/gettyimages-900256522.jpg?quality=90&strip=all&w=1200&h=630&crop=1)`;
    user.innerHTML = `Good morning ${userName}`;
} else if (h < 11 && session==="AM") {
    bg = `url(https://wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-38.jpg)`;
    user.innerHTML =  `Good day ${userName}`;
}else if (h < 8 && session==="PM") {
    bg = `url(https://ak.picdn.net/shutterstock/videos/2272253/thumb/1.jpg)`;
    user.innerHTML = `Good afternoon ${userName}`;
} else {
    bg = `url(https://c4.wallpaperflare.com/wallpaper/741/913/306/moon-night-mountains-nature-wallpaper-preview.jpg)`;
    user.innerHTML = `Good night ${userName}`
}

// background image
const body = document.querySelector("body");
body.style.background = `${bg} center/cover`;
}

document.querySelector(".focus__container input").addEventListener("keypress" , function(event) {
    if(event.key==="Enter") {
        const focus = document.querySelector(".focus__container input");
        document.querySelector(".focus__container").innerHTML = `<h6>Today:</h6><h1>${focus.value}</h1>`
    }
})