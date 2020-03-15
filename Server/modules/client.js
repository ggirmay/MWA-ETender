const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const clientSchema=new Schema({
    name:String,
    number:Number,
    catagory:String,
    location:String, 
    // componeyName:{type:String, required:true },
    // location:{type:String, required:true },
    // email:{type:email, required:true },
    // password:{type:String, required:true },
    // bidder:Boolean,
    // catagory:[String]
   // biddePlaced:[{biddeId:{type:mongoose.Types.ObjectId, ref:'bidde'}}, price:String]

})

module.exports=mongoose.model('client', clientSchema)
//module.exports=mongoose.model('client', clientSchema, 'clients')
// module.exports=mongoose.model('client', postSchema)
