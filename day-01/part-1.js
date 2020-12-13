const fs = require('fs');
const { performance } = require('perf_hooks');

const txt = fs.readFileSync('input.txt', 'utf-8');
const inputs = txt.split('\n').map(item => parseInt(item, 10));
// console.log(inputs);

function findEntries() {
    for (let input1 of inputs) {
        for (let input2 of inputs) {
            if(input1 + input2 === 2020) {
                return input1 * input2;
            }
        }
    }
}
console.log(findEntries())
console.log(performance.now())

// The traditional for loop is faster than for - of loop