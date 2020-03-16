const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const clientSchema=new Schema({
    
    uname:String, 
    pwd : String
   })

module.exports=mongoose.model('client', clientSchema)
