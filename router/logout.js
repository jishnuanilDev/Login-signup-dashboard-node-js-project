
var express = require("express");
var router = express.Router();

router.get('/logout',(req,res)=>{
 
    req.session.destroy(function(err){
        if(err){
    console.log("error");
            res.send('Error')
        }else{
            res.render('base',{title:'express',logout:"Logout Successfully...!"})
            }
        })
        }
    )
 

module.exports = router;