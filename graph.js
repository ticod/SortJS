const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");
const shuffleButton = document.getElementById("js-shuffle");
const initializeButton = document.getElementById("js-initialize");
const selectBox = document.getElementById("js-sortBox");
const userDelay = document.getElementById("js-range");

const timer = ms => new Promise(res => setTimeout(res, ms));

const INITIAL_COLOR = "#2C2C2C";
const ARRAY_RANGE = 100;

canvas.width = 1000;
canvas.height = 700;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = INITIAL_COLOR;

let array = new Array();
let delay = 5;

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function drawGraphAll(arr, color) {
    ctx.fillStyle = color;
    for (let i = 0; i < ARRAY_RANGE; i++) {
        ctx.fillRect(i * 10, canvas.height, 8, -(arr[i] * 7));
    }
}


function drawGraph(i, color) {
    ctx.fillStyle = "white";
    ctx.fillRect(i * 10, canvas.height, 8, -canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(i * 10, canvas.height, 8, -(array[i] * 7));
}

function arrayInit() {
    for (let i = 0; i < ARRAY_RANGE; i++) {
        array[i] = i + 1;
    }
    shuffle(array);
}

function canvasReset() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = INITIAL_COLOR;
}

function handleShuffleClick() {
    canvasReset();
    shuffle(array);
    drawGraphAll(array, INITIAL_COLOR);
    selectBox.value = "";
}

function handleInitializeClick() {
    location.reload();
}

function handleSelectChange(event) {
    sort(event.target.value);
}

function handleDelayChange(event) {
    delay = event.target.value;
}

function sort(sortType) {
    if (sortType === "bubble") {
        bubbleSort(array);
    }
    if (sortType === "insert") {
        insertionSort(array);
    }
    if (sortType === "select") {
        selectionSort(array);
    }
    if (sortType === "shell") {
        shellSort(array);
    }
    if (sortType === "quick") {
        quickSort(array);
    }
}

async function bubbleSort(arr) {
    drawGraphAll(arr, "grey");
    for (let i = 0; i < arr.length - 1; i++) {
        let j = 0;
        for (; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            drawGraph(j, "yellow");
            drawGraph(j + 1, "red");
            await timer(delay);
            drawGraph(j, "grey");
            drawGraph(j + 1, "grey");
        }
        drawGraph(j, INITIAL_COLOR);
    }
    drawGraphAll(arr, INITIAL_COLOR);
}

async function selectionSort(arr) {
    drawGraphAll(arr, "grey");

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
            drawGraph(j, "yellow");
            drawGraph(minIndex, "red");
            await timer(delay);
            drawGraph(j, "grey");
            drawGraph(minIndex, "grey");
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        drawGraph(i, INITIAL_COLOR);
    }
    drawGraphAll(arr, INITIAL_COLOR);
}

async function insertionSort(arr) {
    drawGraphAll(arr, "grey");

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        for (; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];
            drawGraph(j + 1, "yellow");
            drawGraph(i, "red");
            await timer(delay - 1);
            drawGraph(j + 1, "grey");
            drawGraph(i, "grey");
        }
        arr[j + 1] = key;
        drawGraph(j + 1, INITIAL_COLOR);
    }
    console.log(arr);
    drawGraphAll(arr, INITIAL_COLOR);
}

function init() {
    arrayInit();

    if (canvas) {
        drawGraphAll(array, INITIAL_COLOR);
    }

    if (shuffleButton) {
        shuffleButton.addEventListener("click", handleShuffleClick);
    }
    
    if (initializeButton) {
        initializeButton.addEventListener("click", handleInitializeClick);
    }

    if (selectBox) {
        selectBox.addEventListener("change", handleSelectChange);
    }

    if (userDelay) {
        userDelay.addEventListener("input", handleDelayChange);
    }
}

init();