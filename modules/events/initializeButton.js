const button = document.getElementById("js-initialize");

const handleClick = () => {
    location.reload();
}

export const initializeButton = {
    init: () => {
        if (button) {
            button.addEventListener("click", handleClick);
        }
    }
}