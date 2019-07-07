//const db_channel = require('../models/channels')
//const jwt = require('jsonwebtoken')

// module.exports = (req, res) => {
//
// 	jwt.verify(req.body.token, process.env.SECRET, (err, decoded) => {
// 		if (decoded) {
// 			console.log('jeff')
// 			console.log('decoded', decoded)
//
// 			db_channel.create(req.body).then((data)=>{
// 				res.send(data)
// 			}).catch((err)=>{
// 				res.send(err)
// 			})
// 		}
// 	})
//
// }


const db_channel = require('../models/channels')

module.exports = (req, res) => {
	db_channel.create(req.body).then((data) => {
		res.send(data)
	}).catch((err) => {
		res.send(err)
	})
}
