// 1 - 7 = F || B
// 8 - 10 = L }} R
// 0 - 127
// F = 0-63
// B = 64-127
// 0 - 7

const fs = require('fs');
const inputs = fs.readFileSync('input.txt', 'utf-8').split('\n')
    .map(item => {
        item.split('')
        console.log(item)
    });

let lowerRow = 0;
let upperRow = 127;
let lowerColumn = 0;
let upperColumn = 7;

let finalRow;
let finalColumn;

inputs.forEach(seat => {
    // seat.map(digit => {
        const totalRowsLeft = upperRow - lowerRow;
        const totalColumnsLeft = upperColumn - lowerColumn;
    
        const rowHalf = totalRowsLeft / 2;
        const columnHalf = totalColumnsLeft / 2;
      
        switch(seat) {
            case 'F':
                if (totalRowsLeft === 1) finalRow = lowerRow;
                upperRow = Math.floor(upperRow - rowHalf);
                break;
            case 'B':
                if (totalRowsLeft === 1) finalRow = upperRow;
                
                lowerRow = Math.round(upperRow - rowHalf);
                break;
            case 'L':
                if (totalColumnsLeft === 1) finalColumn = lowerColumn;
                
                upperColumn = Math.floor(upperColumn - columnHalf);
                break;
            case 'R':
                if (totalColumnsLeft === 1) finalColumn = upperColumn;
                
                lowerColumn = Math.round(upperColumn - columnHalf);
                break;
            default:
                break;
        }
        // console.log(finalRow, finalColumn)
    // })

})

function calculateSeatId (row, column) {
    return row * 8 + column
}
