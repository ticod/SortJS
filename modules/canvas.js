import { graph } from "./graph.js";
import { colors } from "./colors.js"

const target = document.getElementById("js-canvas");
const ctx = target.getContext("2d");

const ARRAY_RANGE = graph.length;

export const canvas = {
    size: {
        init: (width, height) => {
            canvas.size.WIDTH = width;
            canvas.size.HEIGHT = height;
            canvas.size.BAR_X_DIFF = canvas.size.WIDTH / ARRAY_RANGE;
            canvas.size.BAR_X = canvas.size.WIDTH / ARRAY_RANGE * 0.8;
            canvas.size.BAR_Y = canvas.size.HEIGHT / ARRAY_RANGE;
        },
        WIDTH: 0,
        HEIGHT: 0,
        BAR_X_DIFF: 0,
        BAR_X: 0,
        BAR_Y: 0
    },
    reset: () => {
        ctx.fillStyle = colors.white;
        ctx.fillRect(0, 0, canvas.size.WIDTH, canvas.size.HEIGHT);
        ctx.fillStyle = colors.black;
    },
    init: (width, height) => {
        if (target) {
            canvas.size.init(width, height);
            target.width = width;
            target.height = height;
            canvas.reset();
            canvas.drawGraph(graph, colors.black);
        }
    },
    drawGraph: (arr, color) => {
        ctx.fillStyle = color;
        for (let i = 0; i < ARRAY_RANGE; i++) {
            ctx.fillRect(i * canvas.size.BAR_X_DIFF, canvas.size.HEIGHT, 
                    canvas.size.BAR_X, -(arr[i] * canvas.size.BAR_Y));
        }
    },
    drawBar: (arr, index, color) => {
        ctx.fillStyle = colors.white;
        ctx.fillRect(index * canvas.size.BAR_X_DIFF, canvas.size.HEIGHT, 
                canvas.size.BAR_X, -canvas.size.HEIGHT);
        ctx.fillStyle = color;
        ctx.fillRect(index * canvas.size.BAR_X_DIFF, canvas.size.HEIGHT, 
                canvas.size.BAR_X, -(arr[index] * canvas.size.BAR_Y));
    }
}