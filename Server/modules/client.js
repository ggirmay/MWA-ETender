const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const clientSchema=new Schema({
    cname:String,
    lnumber:Number,
    catagory:String,
    email: String,
    location:String,
    uname:String, 
    pwd : password
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
