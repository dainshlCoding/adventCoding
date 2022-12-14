import * as fs from 'fs';

const input = fs.readFileSync('src/input-1.txt', 'utf8').toString();
const data = input.split('\n',)
console.log(data.length)
let results = [0]
for (const line of data) {
    console.log(line)
    const num = parseInt(line, 10)
    console.log(num)

    if (num && !Number.isNaN(num)) {
        results[results.length - 1] = results[results.length - 1] + num
        console.log('if', results[results.length - 1])

    } else {
        console.log('else', num)
        results.push(0)
    }
}


results = results.sort((a, b) =>
    a - b
)
console.log(results[0], results[results.length - 1]);
