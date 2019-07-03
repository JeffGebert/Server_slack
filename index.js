// Config

const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./db')

// API

app.post('/api/messages', require('./controllers/post_message'))
app.get('/api/messages', require('./controllers/get_messages'))
app.post('/api/channels', require('./controllers/post_channels'))
app.get('/api/channels', require('./controllers/get_channels'))


// Run Server

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
