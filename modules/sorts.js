import { canvas } from "./canvas.js";
import { delay } from "./events/delay.js";
import { colors } from "./colors.js";

const timer = ms => new Promise(res => setTimeout(res, ms));
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const bubbleSort = async (arr) => {
    let i, j;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
            canvas.drawBar(arr, j, colors.yellow);
            canvas.drawBar(arr, j + 1, colors.red);
            await timer(delay.value);
            canvas.drawBar(arr, j, colors.grey);
            canvas.drawBar(arr, j + 1, colors.grey);
        }
        canvas.drawBar(arr, j, colors.black);
    }
    canvas.drawGraph(arr, colors.black);
};

const selectionSort = async (arr) => {
    let i, j, minIndex;
    for (i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
            canvas.drawBar(arr, j, colors.yellow);
            canvas.drawBar(arr, minIndex, colors.red);
            await timer(delay.value);
            canvas.drawBar(arr, j, colors.grey);
            canvas.drawBar(arr, minIndex, colors.grey);
        }
        swap(arr, i, minIndex);
        canvas.drawBar(arr, i, colors.black);
    }
    canvas.drawGraph(arr, colors.black);
};

const insertionSort = async (arr) => {
    let i, j, key;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];
            canvas.drawBar(arr, j + 1, colors.yellow);
            canvas.drawBar(arr, i, colors.red);
            await timer(delay.value);
            canvas.drawBar(arr, j + 1, colors.grey);
            canvas.drawBar(arr, i, colors.grey);
        }
        arr[j + 1] = key;
        canvas.drawBar(arr, j + 1, colors.grey);
    }
    canvas.drawGraph(arr, colors.black);
};

const shellSort = async (arr) => {
    let i, j, gap, sublist, key;
        for (gap = Math.floor(arr.length / 3 + 1); gap >= 1; gap = Math.floor(gap / 3 + 1)) {
            for (sublist = 0; sublist < gap; sublist++) {
                for (i = sublist + gap; i < arr.length; i += gap) {
                    key = arr[i];
                    canvas.drawBar(arr, i, colors.red);
                    j = i - gap;
                    for (; j >= 0 && arr[j] > key; j -= gap) {
                        arr[j + gap] = arr[j];
                        canvas.drawBar(arr, j + gap, colors.yellow);
                        await timer(delay.value);
                    }
                    arr[j + gap] = key;
                    canvas.drawGraph(arr, colors.grey);
                    canvas.drawBar(arr, j + gap, colors.red);
                }
            }
            if (gap <= 1) break;
        }
    canvas.drawGraph(arr, colors.black);
};

const quickSort = async (arr) => {
    const innerFunction = async (arr, left, right) => {
        if (left < right) {
            let temp;
            let i = left, j = right;
            let pivot = arr[left];
            canvas.drawBar(arr, left, colors.red);
            while (i < j) {
                while(arr[j] > pivot) j--;
                while(arr[i] <= pivot && i < j) i++;
                canvas.drawBar(arr, i, colors.yellow);
                canvas.drawBar(arr, j, colors.yellow);
                swap(arr, i, j);
                await timer(delay.value);
                canvas.drawBar(arr, i, colors.grey);
                canvas.drawBar(arr, j, colors.grey);
            }
            swap(arr, left, i);
            canvas.drawBar(arr, i, colors.black);
            canvas.drawBar(arr, left, colors.black);

            innerFunction(arr, left, i - 1);
            innerFunction(arr, i + 1, right);
        }
    };
    innerFunction(arr, 0, arr.length - 1);
    canvas.drawGraph(arr, colors.black);
};

const mergeSort = async (arr) => {
    
};

const heapSort = async (arr) => {
    
};

const countingSort = async (arr) => {
    
};

export const sorts = {
    run: (type, arr) => {
        canvas.drawGraph(arr, "grey");
        if (type === "bubble") {
            // sorts.bubble(arr);
            bubbleSort(arr);
        } else if (type === "select") {
            selectionSort(arr);
        } else if (type === "insert") {
            insertionSort(arr);
        } else if (type === "shell") {
            shellSort(arr);
        } else if (type === "quick") {
            quickSort(arr);
        } else if (type === "merge") {
            mergeSort(arr);
        } else if (type === "heap") {
            heapSort(arr);
        } else if (type === "count") {
            countingSort(arr);
        }
    }
}