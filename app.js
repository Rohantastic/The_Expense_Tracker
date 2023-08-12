const express = require('express');
const app = express();
const route = require('./routes/expense');
app.use(express.urlencoded());
app.use(express.json());


//views
app.use(express.static('public'));
app.set('view engine','ejs');


//middlewares
app.use('/',route);




//port connection
app.listen(3000,()=>{
    console.log('Connection Initiated...');
});