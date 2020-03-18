const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const bidRecievedSchema=new Schema({ 
    itemName:String,
    catagory:{
     type:  String,trim:true,
    },
    
    bidder:[
        {bidderId:{
            type:mongoose.Schema.Types.ObjectId,ref:'Bidder'
        },
        PriceAmount:Number,
        appliedDate:Date
        }
    ],
    clientId:{type:mongoose.Schema.Types.ObjectId,ref:'Client'}
   

})

module.exports=mongoose.model('BidReceived', bidRecievedSchema)
