const clientModel=require('../modules/client')
const jwt = require('jsonwebtoken')
const bidderModel=require('../modules/bidder')
const bcrypt = require('bcryptjs');
//const salt = bcrypt.genSaltSync(10);

module.exports.createUser=async function(req, res, next) {
    const data=req.body;
    console.log(data);

    // bcrypt.genSalt(10,(err,salt)=>{

    //     bcrypt.hash(data.pwd, salt, (err,hash) => {
           
    //         data.pwd=hash;

    if (data.type == "client"){

                       
           
    const user = new clientModel(data); 
    user.save((err, registeredUser)=>{
        if(err)
            console.log(err);
        else{
            console.log('client has been saved');    
            let payload = {subject: registeredUser }
            let token = jwt.sign(payload, 'secreatkey')
            res.status(200).send({token})
            // console.log('Success registration with token ' + token);
        }               
    })//.then(user=>res.json(user))
      //.catch(user=>console.log(err))
}
    else {

        const user = new bidderModel(data); 
        user.save((err, registeredUser)=>{
            if(err)
                console.log(err);
            else{
                console.log('bidder has been saved');    
                let payload = {subject: registeredUser }
                let token = jwt.sign(payload, 'secreatkey')
                res.status(200).send({token})
                // console.log('Success registration with token ' + token);
            }               
        })//.then(user=>res.json(user))
        //.catch(user=>console.log(err))
    }

//})
//})

}


