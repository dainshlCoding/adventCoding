import * as fs from 'fs';

const input = fs.readFileSync('src/input-2.txt', 'utf8').toString();
const data = input.split('\n',)
let results = [0]
for (const line of data) {
    const num = parseInt(line, 10)

    if (num && !Number.isNaN(num)) {
        results[results.length - 1] = results[results.length - 1] + num

    } else {
        results.push(0)
    }
}


results = results.sort((a, b) =>
    b - a
)
console.log(results[0], results[1], results[2]);
console.log(results[0] + results[1] + results[2]);

