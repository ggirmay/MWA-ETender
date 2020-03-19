const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const bidRecievedSchema=new Schema({ 
    itemName:String,
    companyName:String,
    catagory:{
     type:  String,trim:true,
    },
    
    
        bidderId:{
            type:mongoose.Schema.Types.ObjectId,ref:'Bidder'
        },
        amount:Number,
        appliedDate:Date,
})

module.exports=mongoose.model('BidReceived', bidRecievedSchema)
