const Sequelize = require('../models/expense');


exports.mainPage = (req,res,next)=>{
    res.render('mainPage');
}

exports.getForm = (req,res,next)=>{
    res.render('add');
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
    
        res.redirect('/');
        
    }catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
    }

};

exports.getData = async (req,res,next) =>{
   const data =  await Sequelize.findAll(); 
   res.render('details',{
        data : data,
        path: '/'
   });
};

exports.contact = (req,res,next) =>{
    res.render('contact');
};

exports.errorPage = (req,res,next) =>{
    res.status(404).render('404');
}