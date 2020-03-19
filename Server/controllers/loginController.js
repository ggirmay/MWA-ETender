const clientModel=require('../modules/client')
const bidderModel=require('../modules/bidder')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

module.exports.checkUser=async function(req, res, next) {
  let user = req.body

  // bcrypt.compare('somePassword', hash, function(err, res) {
  //   if(res) {
  //    // Passwords match
  //   } else {
  //    // Passwords don't match
  //   } 
  // });

  bidderModel.findOne({uname: user.uname}, (err, dbuser)=>{
    if (err) 
      console.log(err) 
    else{    
      if(!dbuser){
        clientModel.findOne({uname: user.uname}, (err, cdbuser) => {
          console.log('user= '+user.uname);
          
          // if (bcrypt.compare(user.pwd, hash)){
          // }
          if (err) {
            console.log(err)    
          } else {           
            if (!cdbuser){
              res.status(401).send('Invalid user-name or Password')
              console.log('Wrong Credential no user1')
            } 
            else{
              bcrypt.compare(user.pwd, cdbuser.pwd, (err, result)=>{
                if(result){
                  let payload = {subject: cdbuser}
                  let token = jwt.sign(payload, 'secreatkey')
                  res.status(200).send({token})
                }
                else{
                  res.status(401).send('Invalid user-name or Password')
              console.log('Wrong Credential hashed')
                }
              })
            }
          }
        })
      }
      else{
        bcrypt.compare(user.pwd, dbuser.pwd, (err, result)=>{
          if(result){
            let payload = {subject: dbuser}
            let token = jwt.sign(payload, 'secreatkey')
            res.status(200).send({token})
          }
          else{
            res.status(401).send('Invalid user-name or Password')
        console.log('Wrong Credential hashed')
          }
        })  
      }
    }  
  })
    
}

// } if (dbuser.pwd !== user.pwd) {
//   res.status(401).send('Invalid user-name or Password')
//   console.log('Wrong Credential kkkkk')
// } else {
//    let payload = {subject: dbuser}
//    let token = jwt.sign(payload, 'secreatkey')
//    res.status(200).send({token})
//   //  console.log('Success login with token ' + token);
// }

              // } if(bcrypt.compare(user.pwd, dbuser.pwd)) {
            // // if (!cdbuser || cdbuser.pwd !== user.pwd) {
            //   res.status(401).send('Invalid user-name or Password')
            //   console.log('Wrong Credential')
            // } else {
            //    let payload = {subject: cdbuser}
            //    let token = jwt.sign(payload, 'secreatkey')
            //    res.status(200).send({token})
            //   //  console.log('Success login with token ' + token);
            // }
