const db = require('../db')

const db_channel = db.model('channels',{

	name: String,

})

module.exports = db_channel
