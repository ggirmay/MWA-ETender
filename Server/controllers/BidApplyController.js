const bidModel=require('../modules/BidApply')
const bidderModel=require('../modules/bidder');
const biddModel=require('../modules/bidde');
const bidReceivedModel=require('../modules/BidRecieved');

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
    const x=bidderModel.find({_id:'5e6fb0dabd502c24a0490625'}).select({'biddePosted':1});
    x.exec(function (err, someValue) {
        if (err) return next(err);
        res.send(someValue);
    });

}
// var query = dbSchemas.SomeValue.find({}).select({ "name": 1, "_id": 0});
// biddePosted: { $elemMatch: { catagory: "catagory1"}}
module.exports.getBids= async function (req, res, next) {
    const client = new biddModel();
    // SampleModel.find( { dates : { $elemMatch: {  date : { $gte: 'DATE_VALUE' } } } } )
    const x=biddModel.find().populate('componey');
    x.exec(function (err, someValue) {
        if (err) return next(err);
        res.send(someValue);
    });

}
module.exports.createbidReceived=async function(req, res, next) {
    const data=req.body;

    const bidReceived=new bidReceivedModel(data); 
    
    // bidde.componey='5e6e953a55a16716800a0c67';
    bidReceived.save((err, success)=> {
            if(err)
                console.log("err= " +err);
             else
                console.log("success= "+success);            
        }
    );
}


module.exports.getWinnerBidder= async function (req, res, next) {
    const bidReceived = new bidReceivedModel();
    // SampleModel.find( { dates : { $elemMatch: {  date : { $gte: 'DATE_VALUE' } } } } )
    const x=bidReceivedModel.find({clientId:"5e6e934455a16716800a0c66"}).select("bidder.PriceAmount").sort({"bidder.PriceAmount":-1}).limit(1);
    x.exec(function (err, someValue) {
        if (err) return next(err);
        res.send(someValue);
    });

}