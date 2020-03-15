const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const biddeSchema=new Schema({
    itemName:String,
    amount:Number,
    catagory:String,
    deadline:Date,   
    // componey:{type:mongoose.Types.ObjectId, ref:'client' },
})

module.exports=mongoose.model('bidde', biddeSchema)