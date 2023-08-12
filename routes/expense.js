const express = require('express');
const expenseController = require('../controllers/expense');
const router = express.Router();


//home page
router.get('/',expenseController.mainPage);

//form add and post data
router.get('/add',expenseController.getForm);
router.post('/form',expenseController.postData);

//testing
router.get('/display',(req,res)=>{
    res.render('display');
});



module.exports = router;