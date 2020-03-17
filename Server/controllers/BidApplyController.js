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
    // SampleModel.find( { dates : { $elemMatch: {  date : { $gte: 'DATE_VALUE' } } } } )
    const x=bidderModel.find({_id:'5e6faad4e6461106b09ba9e9'}).select({'biddePosted':1, '_id':1});
    x.exec(function (err, someValue) {
        if (err) return next(err);
        res.send(someValue);
    });

}
// var query = dbSchemas.SomeValue.find({}).select({ "name": 1, "_id": 0});
// biddePosted: { $elemMatch: { catagory: "catagory1"}}
