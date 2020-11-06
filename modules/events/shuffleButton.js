import { canvas } from "../canvas.js";
import { array } from "../array.js";
import { colors } from "../colors.js";
import { graph } from "../graph.js";

const button = document.getElementById("js-shuffle");
const selectBox = document.getElementById("js-sortBox");

const handleClick = () => {
    canvas.reset();
    array.shuffle(graph);
    canvas.drawGraph(graph, colors.black);
    selectBox.value = "";
};

export const shuffleButton = {
    init: () => {
        if (button) {
            button.addEventListener("click", handleClick);
        }
    }
}