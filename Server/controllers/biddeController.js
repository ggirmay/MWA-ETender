const biddeModel=require('../modules/bidde')
const clientModel=require('../modules/client')
const bidderModel=require('../modules/bidder')


module.exports.createbidde=async function(req, res, next) {
    const data=req.body;
    console.log("data= "+data);
    
    const bidde=new biddeModel(data); 
    const client=new clientModel();
    // clientModel.findOneAndUpdate({number:2},
    //     {$push:{biddePlaced:bidde}},
    //     (err, success)=> {
    //         if(err)
    //             console.log("err= "+err);
    //          else
    //             console.log("success= "+success);            
    //     }
    // );
    const bidder = new bidderModel({
        cname:'company2',
    lnumber:23,
    catagory:['catagory2', 'catagory3'],
    email: "b@b.com",
    location:"Canada",
    uname:"efg", 
    pwd : "efg"
    });
    //  bidder.save()
    // const filterdBidder=bidderModel.find({catagory:'catagory1'}, (err, bidder)=>{
    //     console.log('filtered bider= '+bidder);
        
    // })
    bidderModel.updateMany({catagory:'catagory2'},{$push:{biddePosted:bidde}},(err, data)=>{
        console.log('updated bider= '+data);
    })
    // Device.update({},{cid: ''},{multi: true});
    // clientModel.findOne({cname:'abc'}, (err, client) => {
    //             if(client){
    //                 console.log("client= "+client);
    //                 console.log("bidde= "+bidde);
    //                 client.biddePlaced.push(bidde);
    //                 client.save;
    //                 console.log("updated client= "+client);
    //                 res.json("bidde added");
    //             }
    //         })
    // bidde.save().then((result) => {
    //     console.log('resulr '+result);
    //     clientModel.findOne({'cname':'abc'}, (err, client) => {
    //         if(client){
    //             console.log(client);
                
    //             client.biddePlaced.push(bidde);
    //             client.save;
    //             res.json('Bidde created');
    //         }
    //     })
    // })
}
//(err, newBidde)=>{
//     if(err)
//     console.log(err);
// else
//     console.log('Success= '+ newBidde);
        
// }