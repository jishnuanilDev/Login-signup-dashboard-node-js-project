var express = require("express");
var router = express.Router();
var MongoClient = require('mongodb').MongoClient; // 

router.post('/signUp', function(req, res) {
    
    MongoClient.connect('mongodb://localhost:27017', function(err, client) { 
        console.log('database connected');
        if (err) 
            console.log('error');
         else 
        //  client.db('information').collection('userdetails').insertOne(req.body)
            console.log('database connected');
           
        
    });

  
    res.render('dashboard');
});


module.exports = router;
