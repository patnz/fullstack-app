import express from 'express'
import path from 'path'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/', movies)

export default server
