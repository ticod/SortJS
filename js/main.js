import { array } from '../modules/array.js';
import { canvas } from '../modules/canvas.js';
import { eventManager } from "../modules/eventManager.js";

function init() {
    array.init();
    canvas.init(1000, 700);
    eventManager.init();
}

init();