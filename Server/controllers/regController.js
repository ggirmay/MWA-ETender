const clientModel=require('../modules/client')
const jwt = require('jsonwebtoken')
//const bidderModel=require('../modules/bidder')

module.exports.createUser=async function(req, res, next) {
    const data=req.body;
    console.log(data);
    //if 
    const user = new clientModel(data); 
    user.save((err, registeredUser)=>{
        if(err)
            console.log(err);
        else
        // res.status(200).send(user)
         let payload = {subject: registeredUser._id }
        let token = jwt.sign(payload, 'girmay')
        res.status(200).send({token})
            console.log('Success registration with token ');
        
                
    })


    //else 
    // const user = new bidderModel(data); 
    // user.save((err, registeredUser)=>{
    //     if(err)
    //         console.log(err);
    //     else
    //         console.log('Success');
        
                
    // })
}