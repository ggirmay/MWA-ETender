const mongoose= require('mongoose');


const Schema=mongoose.Schema;

const clientSchema=new Schema({ 
    cname:String,
    lnumber:Number,
    //catagory:{type:Array},
    email: String,
    location:String,
    uname:String, 
    pwd : {type: String, required:true, maxLength:80},
    biddePlaced:{type:Array},
    biddeRecived:[{

        itemName:String,
        companyName:String,
        catagory:{type:  String,trim:true,},
        
        
            bidderId:{ type:mongoose.Schema.Types.ObjectId,ref:'Client' },
            clientId:{ type:mongoose.Schema.Types.ObjectId,ref:'Bidder' },
            amount:Number,
            appliedDate:Date.now(),
    }],
    biddeRecived:{type:Array},
    type:String
    // componeyName:{type:String, required:true },
    // location:{type:String, required:true },
    // email:{type:email, required:true },
    // password:{type:String, required:true },
    // bidder:Boolean,
    // catagory:[String]
   // biddePlaced:[{biddeId:{type:mongoose.Types.ObjectId, ref:'bidde'}}, price:String]

})

module.exports=mongoose.model('Client', clientSchema)
//module.exports=mongoose.model('client', clientSchema, 'clients')

