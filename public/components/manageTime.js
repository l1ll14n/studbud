//Stopwatch
//Original code referenced from: https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-1/
// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}
  
  // Declare variables to use in our functions below
  
  let startTime;
  let elapsedTime = 0;
  let swInterval;
  
  // Create function to modify innerHTML
  
function swPrint(txt) {
    document.getElementById("display").innerHTML = txt;
}
  
  // Create event listeners
  
  let startStopwatch = document.getElementById("swStart");
  let pauseStopwatch = document.getElementById("swPause");
  let resetStopwatch = document.getElementById("swReset");
  
startStopwatch.addEventListener("click", function(event){
    startTime = Date.now() - elapsedTime;
    swInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        swPrint(timeToString(elapsedTime));
    }, 10);
});
  
pauseStopwatch.addEventListener("click", function(event){
    clearInterval(swInterval);
});
  
resetStopwatch.addEventListener("click", function(event){
    clearInterval(swInterval);
    swPrint("00:00:00");
    elapsedTime = 0;
});
  
//Timer
//Original code referenced from: https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/
//Credit: Mateusz Rybczonec


  
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 150;
  const ALERT_THRESHOLD = 30;
  
const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
};
  
//Setting time limit based on pomodoro time button pressed
//event listners
  var TIME_LIMIT = 0;

  let fiveMin = document.getElementById("5Button");
  let twentyFiveMin = document.getElementById("25Button");
  let thirtyMin = document.getElementById("30Button");

  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;

fiveMin.addEventListener("click", function(event){
    TIME_LIMIT = 300;
    tPrint("5:00");
});

twentyFiveMin.addEventListener("click", function(event){
    TIME_LIMIT = 1500;
    tPrint("25:00");
});

thirtyMin.addEventListener("click", function(event){
    TIME_LIMIT = 1800;
    tPrint("30:00");
});
  
  document.getElementById("showTimer").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label"> 
    ${formatTime(timeLeft)}
    </span>
  </div>
  `;

  //Button Control -> when you press a button it sets the timer to that amount of time, you press start to start, pause to pause, and reset to reset the timer
  //event listeners

  let timerStart = document.getElementById("timerStart");
  let timerPause = document.getElementById("timerPause");
  let timerReset = document.getElementById("timerReset");
  let timerDisplay = document.getElementById("base-timer-label");
    

    timerStart.addEventListener("click", function(event){
        if (TIME_LIMIT != 0){
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
            );
            setCircleDasharray();
            setRemainingPathColor(timeLeft);
            if (timeLeft === 0) {
            onTimesUp();
            }
        }, 1000);
        console.log(document.getElementById("base-timer-label").innerHTML);
        } else {
            console.log("No time input");
        }
    });


timerPause.addEventListener("click", function(event){
    formatTime(timeLeft);
    clearInterval(timerInterval);
});
  
timerReset.addEventListener("click", function(event){
    clearInterval(timerInterval);
    TIME_LIMIT = 0;
    tPrint("0:00");
});

function tPrint(txt) {
    document.getElementById("base-timer-label").innerHTML = txt;
}
  
function onTimesUp() {
    clearInterval(timerInterval);
}
  
//   function startTimer() {
//     timerInterval = setInterval(() => {
//       timePassed = timePassed += 1;
//       timeLeft = TIME_LIMIT - timePassed;
//       document.getElementById("base-timer-label").innerHTML = formatTime(
//         timeLeft
//       );
//       setCircleDasharray();
//       setRemainingPathColor(timeLeft);
  
//       if (timeLeft === 0) {
//         onTimesUp();
//       }
//     }, 1000);
//   }
  


function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    return `${minutes}:${seconds}`;
}
  
function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
}
  
function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
  
function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
}
  
  
  
  
  
  