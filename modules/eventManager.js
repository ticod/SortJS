import { delay } from "./events/delay.js";
import { initializeButton } from "./events/initializeButton.js";
import { shuffleButton } from "./events/shuffleButton.js";
import { sortSelectBox } from "./events/sortSelectBox.js";

const eventList = [delay, initializeButton, shuffleButton, sortSelectBox];

export const eventManager = {
    init: () => {
        for (let i = 0; i < eventList.length; i++) {
            eventList[i].init();
        }
    }
}