const Dalai = require("dalai")
const readline = require("readline")
const dalai = new Dalai()

async function main() {
    await dalai.install("llama", "13B")
    exit(0)    
}

main() 

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

input.on('line', (line) => {
    const req = { model: 'alpaca.7B', prompt: line }
    dalai.request(req, handler)

})

function handler(token) {
    process.stdout.write(token)
}
