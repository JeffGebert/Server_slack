const db = require('../db')
const mongoose = require('mongoose')

const db_message = db.model('message',{

	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref:'user',
		required: [true, 'Message Channel is required']
	},
	date: {
		type: Date,
		default: Date.now()
	},
	body: {
		 type:String,
		 required: [true, 'Message Channel is required']
	},
	channel:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'channel',
		required: [true, 'Message Channel is required']
	}

})


module.exports = db_message
