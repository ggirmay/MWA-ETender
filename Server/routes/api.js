const express=require('express');
const router=express.Router();
const apiController=require('../controllers/apiController')
const mongoose=require('mongoose')
//mongodb://localhost:27017/eventsdb
const option={useUnifiedTopology: true, useNewUrlParser: true }
// const url = 'mongodb://localhost:27017/etender';
const url='mongodb+srv://bruk:123abc@cluster0-n6nr7.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(url, option, (err)=>{
    if (err){
        console.log('Error!' + er);
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
    
    const cat=mongoose.model('Cat', {name:String});

    const kitty= new cat({name:'kk'});
    kitty.save().then(()=>console.log('meow'));
    //Users.findOneAndUpdate({name: req.user.name}, {$push: {friends: friend}});
    // cat.findOneAndUpdate({name:'kk'}, {$push: {type:'big'}}).then(()=>console.log('inserted')
    // )
    
});

// router.post('/', parse_json, studentController.addStudent);

// router.delete('/:id', parse_json, studentController.deleteStudent);
module.exports=router;