const fs = require('fs');
const txt = fs.readFileSync('input.txt').toString();

function transform(inputs) {
    inputs = inputs.split('\n');
    let outputs = [];
    for(let i = 0; i < inputs.length; i++) {
        let match = inputs[i].match(/(?<min>\d+)-(?<max>\d+) (?<char>[a-z]): (?<password>[a-z]+)$/m);
        if (match) {
            outputs.push({
                min: parseInt(match.groups.min),
                max: parseInt(match.groups.max),
                char: match.groups.char,
                password: match.groups.password
            })
        }
    }
    return outputs;
}

function countValidPasswords(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        let password = input[i].password.replace(RegExp(`[^${input[i].char}]`, 'g'), '')
        if (password.length >= input[i].min && password.length <= input[i].max) {
            count++
        }
    }
    return count;
}

console.log(countValidPasswords(transform(txt)));

