const bidModel=require('../modules/BidApply')
const bidderModel=require('../modules/bidder');

module.exports.postBid=async function(req, res, next) {
    // const bid=req.body;
    // console.log(data);
    
    
    // bidde.save((err, newBidde)=>{
    //     if(err)
    //         console.log(err);
    //     else
    //         console.log('Success');
                
    // })
}
module.exports.getBidds= async function (req, res, next) {
    const bidder = new bidderModel();
    
    bidderModel.findOne(
         { "biddePosted.catagory": "catagory1"},
         (err, success)=> {
                    if(err)
                        console.log("err= "+err);
                     else
                        res.json(success);            
                }
      );
    
}
