// Config

const express = require('express')
const path = require('path')
const app = express()


require('dotenv').config()

// API

app.get('/api/server', require('./controllers/properties_get'))



// serve every file inside 'client' folder as static
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/server.html'))
	console.log('__dirname', __dirname)
})

require('dotenv').config()


// Run Server

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
})
