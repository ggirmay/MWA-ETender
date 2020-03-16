const mongoose= require('mongoose');

const Schema=mongoose.Schema;

const clientSchema=new Schema({
    componeyName:{type:String, required:true },
    location:{type:String, required:true },
    // email:{type:email, required:true },
    password:{type:String, required:true },
    bidder:Boolean,
    catagory:[String],
    biddePlaced:{type:Array}

    // biddePlaced:[{type:Schema.Types.ObjectId, ref:'bidde'}]

    // biddePlaced:[{biddeId:{type:mongoose.Types.ObjectId, ref:'bidde'}}]
})

module.exports=mongoose.model('Client', clientSchema)
// module.exports=mongoose.model('client', postSchema)
