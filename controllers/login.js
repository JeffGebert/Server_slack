const db_user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = (req, res) => {

	//1.check if email exists in db
	db_user.findOne({email: req.body.email}).then((user)=>{
		if(user){

			bcrypt.compare(req.body.password,user.password, (err, match) =>{

				if (match) {
					let token = jwt.sign(user.toObject(), process.env.SECRET)
					res.status(200).json({
						message: 'You are logged in',
						token: token
					})
				}else{
					res.send('Sorry, invalid password')
				}

			})
		} else{
			res.send('Sorry, email not found')
		}

	}).catch((err) => {
		res.status(300).send(err)
	})

}


  //2. If email found, encrypt password
	//3.Match passwords
	//4.If passwords match, res OK
