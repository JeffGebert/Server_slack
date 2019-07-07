const db = require('../db')
const mongoose = require('mongoose')

const db_user = db.model('user',{

	name: {
		type:String,
		required: [true, 'User Name is required']
	},
	email:{
		type:String,
		required: [true, 'Email is required']

	},
	password: {
		type:String,
		default: true,
		required: [true, 'User Password is required']
	}

})

module.exports = db_user
