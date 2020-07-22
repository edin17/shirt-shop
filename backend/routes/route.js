const router = require('express').Router();
let User = require('../models/user.model');
const { json } = require('express');



router.get('/',(req,res)=>{

    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error:'+err))
});



router.post('/add',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email=req.body.email;

    const newUser=new User({username,password,email});

    newUser.save()
    .then(()=> res.json('User added'),
          
    )
    .catch(err=>res.status(400).json('Error:'+err));
});

router.post('/login',async(req,res)=>{   
    const username = req.body.username;
    const password = req.body.password;
    
    

    const user = await User.findOne({username:username,password:password})
    if(user){
        res.send('Success');
        console.log('Success')
    }else if(!user){
        res.status(400).send('Incorrect');
        console.log('Incorrect')
    }
})

module.exports = router;