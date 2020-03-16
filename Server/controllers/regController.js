const clientModel=require('../modules/client')


module.exports.createUser=async function(req, res, next) {
    const data=req.body;
    console.log(data);
    
    const user = new clientModel(data); 
    user.save((err, newUser)=>{
        if(err)
            console.log(err);
        else
            console.log('Success');
                
    })
}