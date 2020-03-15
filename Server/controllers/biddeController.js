const biddeModel=require('../modules/bidde')


module.exports.createbidde=async function(req, res, next) {
    const data=req.body;
    console.log(data);
    
    const bidde=new biddeModel(data); 
    bidde.save((err, newBidde)=>{
        if(err)
            console.log(err);
        else
            console.log('Success');
                
    })
}
