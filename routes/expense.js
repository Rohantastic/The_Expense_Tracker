const express = require('express');
const expenseController = require('../controllers/expense');
const router = express.Router();


router.get('/',expenseController.getForm);
router.post('/form',expenseController.postData);




module.exports = router;