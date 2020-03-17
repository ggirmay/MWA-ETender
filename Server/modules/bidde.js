const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const biddeSchema=new Schema({
    itemName:String,
    amount:{
        type:Number,trim:true},
    catagory:String,
    openingDate: {type: Date, required: true, default: Date.now(),},
    closingDate:Date,   
    Specification: { type: String},
    componey:{type:mongoose.Schema.Types.ObjectId, ref:'Client' }
})

module.exports=mongoose.model('bidde', biddeSchema)