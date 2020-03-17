const express=require('express');
const router=express.Router();
const bidController=require('../controllers/BidApplyController')

const mongoose=require('mongoose')


const option={useUnifiedTopology: true, useNewUrlParser: true }
const url='mongodb+srv://Mulie:Mulieman@cluster0-zk8dn.mongodb.net/test?retryWrites=true&w=majority';

// mongoose.connect(url, option, (err)=>{
//     if (err){
//         console.log('Error!' + er);
//     }else{
//         console.log('connected to mongodb');
        
//     }
// })


// router.post('/postBid', bidController.postBid);
// router.get('/',bidController.getBidds);


module.exports=router;