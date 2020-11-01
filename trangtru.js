const express=require('express');
const app=express();
const aws=require('aws-sdk');
var bodyParser = require('body-parser');


var cookieParser = require('cookie-parser');
app.use(cookieParser());
const rout=require('./Routs/routhome');

const routxl=require('./Routs/cachamxulichung');
const port =3000;



app.set('view engine','ejs');
app.set('views','./views');


app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

aws.config.update({
    region:'local',
    endpoint:'http://localhost:8000'
});
// app.use('/home',routxl);
app.use('/home',rout);


app.listen(port,function(){
    console.log('start server ' + port);
});






