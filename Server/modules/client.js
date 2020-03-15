const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const postSchema=new Schema({
    componeyName:{type:String, required:true },
    location:{type:String, required:true },
    email:{type:email, required:true },
    password:{type:String, required:true },
    bidder:Boolean,
    catagory:[String]
})

module.exports=mongoose.model('client', postSchema, 'clients')