exports.getForm = (req,res,next)=>{
    res.render('home');
}

exports.postData = (req,res,next) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    const object = {
        amount : amount,
        description: description,
        category: category,
    }
    res.json(object);

}   