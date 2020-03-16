const bidModel=require('../modules/BidApply')


module.exports.postBid=async function(req, res, next) {
    const bid=req.body;
    console.log(data);
    
    const bidModel=new bidModel(bid); 
    bidde.save((err, newBidde)=>{
        if(err)
            console.log(err);
        else
            console.log('Success');
                
    })
}
module.exports.getBidds=async function (req, res, next) {
    bidModel.find()
        
    
}
