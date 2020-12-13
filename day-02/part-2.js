const fs = require('fs');
const txt = fs.readFileSync('input.txt').toString();

function transform(inputs) {
    inputs = inputs.split('\n');
    let outputs = [];
    for(let i = 0; i < inputs.length; i++) {
        let match = inputs[i].match(/(?<min>\d+)-(?<max>\d+) (?<char>[a-z]): (?<password>[a-z]+)$/m);
        if (match) {
            outputs.push({
                first: parseInt(match.groups.min) - 1,
                second: parseInt(match.groups.max) - 1,
                char: match.groups.char,
                password: match.groups.password
            })
        }
    }
    return outputs;
}

function countValid(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        (input[i].password[input[i].first] === input[i].char ? 
            input[i].password[input[i].second] !== input[i].char :
            input[i].password[input[i].second] === input[i].char) ?
                count++ : null
    }
    return count;
}

console.log(countValid(transform(txt)));