const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const bidderSchema=new Schema({ 
    cname:String,
    lnumber:Number,
    catagory:{
     type:  [String],trim:true,
    },
    email: String,
    location:String,
    uname:String, 
    pwd : String,
    biddeApplied:{type:Array},
    biddePosted:{type:Array}
    // componeyName:{type:String, required:true },
    // location:{type:String, required:true },
    // email:{type:email, required:true },
    // password:{type:String, required:true },
    // bidder:Boolean,
    // catagory:[String]
   // biddePlaced:[{biddeId:{type:mongoose.Types.ObjectId, ref:'bidde'}}, price:String]

})

module.exports=mongoose.model('Bidder', bidderSchema)
//module.exports=mongoose.model('client', clientSchema, 'clients')

