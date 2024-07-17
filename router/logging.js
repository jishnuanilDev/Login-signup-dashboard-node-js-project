var express = require("express");
var router = express.Router();


router.get('/logging',function(req,res){
    res.render('base',{title:'Login System'})
})


module.exports=router;