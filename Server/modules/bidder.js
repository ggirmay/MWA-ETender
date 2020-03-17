const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const bidderSchema=new Schema({ 
    cname:String,
    lnumber:Number,
    catagory:String,
    email: String,
    location:String,
    uname:String, 
    pwd : String,
    biddePlaced:{type:Array}
   

})

module.exports=mongoose.model('bidder', bidderSchema)
//module.exports=mongoose.model('client', clientSchema, 'clients')