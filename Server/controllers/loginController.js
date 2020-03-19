const clientModel=require('../modules/login')
const bidderModel=require('../modules/bidder')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

module.exports.checkUser=async function(req, res, next) {
    
    let user = req.body
  const dbuser = bidderModel.findOne({uname: user.uname});
    console.log('test')
    console.log(dbuser.uname)   
    console.log(dbuser.pwd) 
 
   if (!bduser) {
    const dbuser = clientModel.findOne({uname: user.uname});
      console.log(dbuser.uname)   
      console.log(dbuser.pwd)
   }
      
       
                
        // bcrypt.compare(user.pwd, dbuser.pwd).then(isMatch =>{


        //   if(!dbuser || !isMatch){



        
        if (!dbuser || dbuser.pwd !== user.pwd) {
          res.status(401).send('Invalid user-name or Password')
          console.log('Wrong Credential')
        } else {
           let payload = {subject: dbuser}
           //let payload = {uname: dbuser.uname, avator : dbuser.avator }
           let token = jwt.sign(payload, 'secreatkey')
           res.status(200).send({token})
          //  console.log('Success login with token ' + token);
        }
     // })
     }
    