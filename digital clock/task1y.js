let para1 = document.getElementById("para-x");
let para2 = document.getElementById("para-y");
let button1 = document.getElementById("button-x");
let button2 = document.getElementById("button-y");

let time = new Date();
para2.textContent = ` ${time.getDate()} / ${time.getMonth()+1} / ${time.getFullYear()}`;
para1.textContent = ` ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;


let timer = null;

function stop() {
    clearInterval(timer)
}

function start() {

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let date_x = time.getDate();
    timer = setInterval(function(event) {
        seconds = seconds + 1;
        if (seconds > 59) {
            minutes = minutes + 1;
            seconds = 0;
            if (minutes > 59) {
                hours = hours + 1;
                minutes = 0;
                if (hours > 24) {
                    hours = 0;
                    date_x = date_x + 1;
                }
            }
        }
        para1.textContent = ` ${hours} : ${minutes} : ${seconds}`;
    }, 1000)
}