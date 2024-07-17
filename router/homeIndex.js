//home route
const express=require('express')
const router=express.Router();

router.get('/',(req,res)=>{
    if(req.session.user){
        res.redirect('/route/dashboard')
    }
    // else{
    //     res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
    //     res.render('base',{title:"Login System"});
    // }
    res.render('index');
})

module.exports=router;