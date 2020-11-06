import { graph } from '../modules/graph.js';

export const array = {
    init: () => {
        for (let i = 0; i < graph.length; i++) {
            graph[i] = i + 1;
        }
        array.shuffle(graph);
    },
    shuffle: (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}