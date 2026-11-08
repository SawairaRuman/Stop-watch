// let seconds=0;
// let timer=null;
// function updateTime() {
//     document.getElementById("time").innerText = seconds;
//   }

//   function start() {
//     if (timer !== null) return;
//     timer = setInterval(function() {
//       seconds++;
//       updateTime();
//     }, 1);
//   }

//   function stop() {
//     clearInterval(timer);
//     timer = null;
//   }

//   function reset() {
//     stop();
//     seconds = 0;
//     updateTime();
//   }

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

function startTimer() {
    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        let h = String(hours).padStart(2, "0");
        let m = String(minutes).padStart(2, "0");
        let s = String(seconds).padStart(2, "0");

        document.getElementById("display").innerText =
            h + ":" + m + ":" + s;

    }, 1);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);

    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("display").innerText = "00:00:00";
}
