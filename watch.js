let timer, startTime;
let running = false;
let elapsedTime = 0;

const startBtn = document.getElementById("btn-start");
const stopBtn = document.getElementById("btn-stop");
const resetBtn = document.getElementById("btn-reset");
const display = document.getElementById("digit");

function updateDis() {
    const time = new Date(elapsedTime);
    const hours = String(time.getUTCHours()).padStart(2, '0');
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDis();
        },2);
        running = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stop() {
    if (running) {
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
        running = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        
    }
}

function reset() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    updateDis();
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

// Initialize display
updateDis();
