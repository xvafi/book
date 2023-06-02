function readMore() {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn");

    if(dots.style.display === "none") {
        dots.style.display="inline";
        btn.innerHTML="Подробнее";
        more.style.display="none";
    }
    else {
        dots.style.display="none";
        btn.innerHTML="Скрыть";
        more.style.display="inline";
    }
}
function readMore1() {
    let dots1 = document.getElementById("dots1");
    let more1 = document.getElementById("more1");
    let btn1 = document.getElementById("btn1");

    if(dots1.style.display === "none") {
        dots1.style.display="inline";
        btn1.innerHTML="Подробнее";
        more1.style.display="none";
    }
    else {
        dots1.style.display="none";
        btn1.innerHTML="Скрыть";
        more1.style.display="inline";
    }
}
function readMore2() {
    let dots2 = document.getElementById("dots2");
    let more2 = document.getElementById("more2");
    let btn2 = document.getElementById("btn2");

    if(dots2.style.display === "none") {
        dots2.style.display="inline";
        btn2.innerHTML="Подробнее";
        more2.style.display="none";
    }
    else {
        dots2.style.display="none";
        btn2.innerHTML="Скрыть";
        more2.style.display="inline";
    }
}
function readMore3() {
    let dots3 = document.getElementById("dots3");
    let more3 = document.getElementById("more3");
    let btn3 = document.getElementById("btn3");

    if(dots3.style.display === "none") {
        dots3.style.display="inline";
        btn3.innerHTML="Подробнее";
        more3.style.display="none";
    }
    else {
        dots3.style.display="none";
        btn3.innerHTML="Скрыть";
        more3.style.display="inline";
    }
}
function readMore4() {
    let dots4 = document.getElementById("dots4");
    let more4 = document.getElementById("more4");
    let btn4 = document.getElementById("btn4");

    if(dots4.style.display === "none") {
        dots4.style.display="inline";
        btn4.innerHTML="Подробнее";
        more4.style.display="none";
    }
    else {
        dots4.style.display="none";
        btn4.innerHTML="Скрыть";
        more4.style.display="inline";
    }
}
let button = document.querySelector("#button");

button.addEventListener('click', function(){
    alert("Спасибо, вам перезвонят");
}) ;