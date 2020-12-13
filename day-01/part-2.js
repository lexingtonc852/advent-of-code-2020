const fs = require('fs');
const { performance } = require('perf_hooks');

const txt = fs.readFileSync('input.txt', 'utf-8');
const inputs = txt.split('\n').map(item => parseInt(item, 10));

function findEntries2() {
    for (let i = 0; i < inputs.length; i++) {
        for (let j = 0; j < inputs.length; j++) {
            for(let k = 0; k < inputs.length; k++) {
                if (inputs[i] + inputs[j] + inputs[k] === 2020 && i !== j) {
                    if (k !== j && i !== k) {
                        return inputs[i] * inputs[j] * inputs[k];
                    }
                }
            }
        }
    }
}
console.log(findEntries2())
console.log(performance.now())