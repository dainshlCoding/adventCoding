import * as fs from 'fs';

const input = fs.readFileSync('src/input-1.txt', 'utf8').toString();
const data = input.split('\n',)
console.log(data.length)
let results = [0]
for (const line of data) {
    const num = line ? parseInt(line) : 0
    if (num && !Number.isNaN(num)) {
        results[results.length - 1] = results[results.length - 1] + num
    } else {
        console.log('else', num)
        results.push(num)
    }
}


results = results.sort((a, b) =>
    a - b
)
console.log(results[0], results[results.length - 1]);
