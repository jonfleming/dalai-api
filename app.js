const Dalai = require("dalai")
const readline = require("readline")
const dalai = new Dalai('/home/jon/dalai')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

input.on('line', (line) => {
    const req = { model: 'llama.13B', prompt: line }
    dalai.request(req, handler)

})

function handler(token) {
    process.stdout.write(token)
}
