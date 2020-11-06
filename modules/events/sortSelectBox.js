import { sorts } from "../sorts.js";
import { graph } from "../graph.js";

const selectBox = document.getElementById("js-sortBox");

const handleChange = (event) => {
    sorts.run(event.target.value, graph);
};

export const sortSelectBox = {
    init: () => {
        if (selectBox) {
            selectBox.addEventListener("change", handleChange);
        }
    }
}