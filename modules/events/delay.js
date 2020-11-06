const userDelay = document.getElementById("js-range");

const handleInput = (event) => {
    delay.value = event.target.value;
};

export const delay = {
    value: userDelay.value,
    init: () => {
        if (userDelay) {
            userDelay.addEventListener("input", handleInput)
        }
    },
}