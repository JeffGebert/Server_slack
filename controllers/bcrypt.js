const db_user = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
	bcrypt.hash(req.body.password, 10 (err, encrypted) =>{

		if (err){
			res.status(300).send('Error:', err')
		}else{
			req.body.password = encrypted
			db_message.create(req.body).then((data)=>{
				res.send(data)
			}).catch((err)=>{
				res.send(err)
				})
			}

		}
	})
