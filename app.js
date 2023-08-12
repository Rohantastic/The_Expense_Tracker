const express = require('express');
const route = require('./routes/expense');
const app = express();

//views
app.use(express.static('public'));
app.set('view engine','ejs');


//middlewares
app.use('/',route);




//port connection
app.listen(3000,()=>{
    console.log('Connection Initiated...');
});