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
        startTime = Date.now() - elapsedTime; // Record start time
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime; // Update elapsed time
            updateDis(); // Update display
        }, 1000); // Update every 1 second
        running = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stop() {
    if (running) {
        clearInterval(timer); // Stop the timer
        running = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function reset() {
    clearInterval(timer); // Stop the timer
    running = false;
    elapsedTime = 0; // Reset elapsed time
    updateDis(); // Update display
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

// Initialize display
updateDis();
