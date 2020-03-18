const express=require('express');
const router=express.Router();
const jwt = require('jsonwebtoken')
require('dotenv').config();
const apiController=require('../controllers/apiController')
const biddeController=require('../controllers/biddeController')
const regController=require('../controllers/regController')
const loginController=require('../controllers/loginController')
const mongoose=require('mongoose')
const bidController=require('../controllers/BidApplyController')

//mongodb://localhost:27017/eventsdb
const option={useUnifiedTopology: true, useNewUrlParser: true }
// const url = 'mongodb://localhost:27017/etender';
// const url='mongodb+srv://bruk:123abc@cluster0-n6nr7.mongodb.net/test?retryWrites=true&w=majority'

const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD
const url=`mongodb+srv://${username}:${password}@cluster0-n6nr7.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, option, (err)=>{
    
    if (err){
        console.log('Error!' + err);
        
    }else{
        console.log('connected to mongodb');
       
    }
})
// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
//   }).then(res=>{
//           console.log("DB Connected!")
//   }).catch(err => {
//     console.log(Error, err.message);
//   });

router.get('/', (req,res)=>{
    console.log("conected");
    
    // const cat=mongoose.model('Cat', {name:String});

    // const kitty= new cat({name:'kk'});
    // kitty.save().then(()=>console.log('meow'));
    //Users.findOneAndUpdate({name: req.user.name}, {$push: {friends: friend}});
    // cat.findOneAndUpdate({name:'kk'}, {$push: {type:'big'}}).then(()=>console.log('inserted')
    // )
    
});

// router.post('/register', (req,res)=>{

// });
function verifyToken(req, res, next){
    if (!req.headers.authorization){
      return res.status(401).send('Unauthorized request')
    }
    let token= req.headers.authorization.split(' ')[1]
    console.log('token in the app= '+ token)
    if (token==='null'){
      return res.status(401).send('Unauthorized request')
    }
    let payload=jwt.verify(token, 'secreatkey')
    if(!payload){
      return res.status(401).send('Unauthorized request')
    }
    req.userId=payload.subject
    next()
  }
  
router.post('/register', regController.createUser);

router.post('/bidde', verifyToken ,biddeController.createbidde);

router.post('/login', loginController.checkUser);
router.get('/bidder',bidController.getBidds);

router.get('/bid',bidController.getBids);
router.post('/bid', biddeController.createbid);

module.exports=router; 