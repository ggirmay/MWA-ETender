const clientModel=require('../modules/login')
const jwt = require('jsonwebtoken')


module.exports.checkUser=async function(req, res, next) {
    
    let user = req.body
    clientModel.findOne({uname: user.uname}, (err, dbuser) => {
      if (err) {
        console.log(err)    
      } else {
        console.log(dbuser.uname)   
        console.log(dbuser.pwd)   
        if (!dbuser || dbuser.pwd !== user.pwd) {
          res.status(401).send('Invalid userName or Password')
          console.log('Invalid user')
        } else {
           let payload = {subject: dbuser}
           let token = jwt.sign(payload, 'secreatkey')
           res.status(200).send({token})
           console.log('Success login with token ' + token);
        }
      }
    })
  }