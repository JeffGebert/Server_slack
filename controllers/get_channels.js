const db_channel = require('../models/channels')


module.exports = (req, res) => {
	db_channel.find({}).then((data)=>{
		res.send(data)
	}).catch((err)=>{
		res.send(err)
	})
 }
