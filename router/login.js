var express = require("express");
var router = express.Router();
var Mongoclient=require('mongodb').Mongoclient


const details = {
  email: "user@gmail.com",
  password: "user123",
};



//login user
router.post("/login",(req,res)=>{
    if(req.body.email != details.email) {
   
        res.render('base', { error: 'Invalid Email' });
    }
    else if(req.body.password != details.password) {
        res.render('base', { error: 'Invalid Password' });
    }

    else {
        res.render('dashboard')
      
     
       }}) 
   
        // req.session.user =true;
        // res.redirect('/route/dashboard');
    

//route for dashboard
// router.get('/dashboard',(req,res)=>{
//     if(req.session.user){
//         res.setHeader('Cache-Control','no-store, no-cache, must-revalidate, private');
//     res.render("dashboard", { user: req.session.user });
//     }
// })

//route for logout


module.exports = router;
