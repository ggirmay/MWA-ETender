const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const postSchema=new Schema({
    itemName:String,
    amount:Number,
    catagory:String,
    deadline:String
})

module.exports=mongoose.model('client', postSchema, 'clients')