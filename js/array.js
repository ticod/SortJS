const ARRAY_RANGE = 100;

let array = new Array();

const arrayInit = (arr) => {
    for (let i = 0; i < ARRAY_RANGE; i++) {
        arr[i] = i + 1;
    }
    shuffle(arr);
};

const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

export {array, arrayInit, shuffle};