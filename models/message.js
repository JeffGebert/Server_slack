const db = require('../db')

const db_message = db.model('message',{

	author: String,
	date: String,
	body: String

})


module.exports = db_message
