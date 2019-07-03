// Config

const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()

require('./db')

// API

app.post('/api/messages', require('./controllers/post_message'))
app.get('/api/messages', require('./controllers/get_messages'))



// Run Server

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
