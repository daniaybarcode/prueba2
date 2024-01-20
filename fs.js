const fs = require('fs')

// const first =fs.readFileSync('./data/first.txt', 'utf8')
// const second =fs.readFileSync('./data/second.txt')
// const third =fs.readFileSync('./data/third.txt', 'utf8')


// console.log(first)
// console.log(second.toString())
// console.log(third)

fs.writeFile('./data/4.txt', 'hola mundo',(error, data) => {
    let texto= data.toString()
    console.log(error)
    console.log(texto)
}
)