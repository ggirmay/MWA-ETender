const clientModel=require('../modules/login')

module.exports.checkUser=async function(req, res, next) {
    
    let user = req.body
    clientModel.findOne({uname: user.uname}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
          res.status(401).send('Invalid user')
          console.log('Invalid user')
        } else 
        if ( user.password !== user.pwd) {
            console.log('Invalid Password')
          res.status(401).send('Invalid Password')
        } else {
          res.status(200).send(user)
        }
      }
    })
  }