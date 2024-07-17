const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const session = require("express-session");
const {v4:uuidv4}=require("uuid")
// const router = require('./router/login');
const nocache = require('nocache');
const app = express();

const port = process.env.port||4000;
const loginroute=require('./router/login')
const logoutroute=require('./router/logout');
const homeIndex=require('./router/homeIndex')

const signUp=require('./router/signUp')
const logging=require('./router/logging')
// const router = require('./router/logout');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');

//load static assets
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))
app.use(nocache())
app.use('/route',loginroute)
app.use('/routeout',logoutroute)
app.use('/',homeIndex)

app.use('/routesign',signUp)
app.use('/routelog',logging)



app.listen(port,()=>{console.log("Listening to the server on http://localhost:4000")});