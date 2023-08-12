const express = require('express');
const expenseController = require('../controllers/expense');
const router = express.Router();


//home page
router.get('/',expenseController.mainPage);

//form add and post data
router.get('/add',expenseController.getForm);
router.post('/form',expenseController.postData);

//get data
router.get('/get',expenseController.getData);

//contact page
router.get('/contact',expenseController.contact);

router.get('*',expenseController.errorPage);

//testing
router.get('/display',(req,res)=>{
    res.render('display');
});



module.exports = router;