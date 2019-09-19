const express = require('express')
const server = express()

server.use(express.json())

server.get('/', (req,res) => {
    res.json("it's working!!!")
})



module.exports = server