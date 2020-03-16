const biddeModel=require('../modules/bidde')
const clientModel=require('../modules/client')


module.exports.createbidde=async function(req, res, next) {
    const data=req.body;
    console.log("data= "+data);
    
    const bidde=new biddeModel(data); 
    const client=new clientModel();
    clientModel.findOneAndUpdate({cname:'abc'},
        {$push:{biddePlaced:bidde}},
        (err, success)=> {
            if(err)
                console.log("err= "+err);
             else
                console.log(success);            
        }
    );
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