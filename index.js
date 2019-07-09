// Config

const express = require('express')
const path = require('path')
require('dotenv').config()
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())



require('./db')

// API

app.post('/api/messages', require('./controllers/post_message'))
app.get('/api/messages', require('./controllers/get_messages'))
app.post('/api/channels', require('./controllers/post_channels'))
app.get('/api/channels', require('./controllers/get_channels'))
app.post('/api/signup', require('./controllers/post_createuser'))
app.get('/api/signup', require('./controllers/get_createuser'))
app.get('/api/login', require('./controllers/login'))
app.post('/api/login', require('./controllers/login'))
// Run Server

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
