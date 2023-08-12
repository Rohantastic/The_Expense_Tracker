const Sequelize = require('../models/expense');

exports.getForm = (req,res,next)=>{
    res.render('home');
}

exports.postData = async (req,res,next) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    const object = {
        amount : amount,
        description: description,
        category: category,
    }

    try{
        const expenseResult =  await Sequelize.create({
            amount,
            description,
            category
        });
    
        res.json(object);
    }catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
    }

}   