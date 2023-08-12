const customer = require('../models/customer');
const mongoose = require('mongoose');
const flash = require('connect-flash');


exports.homepage =async(req,res)=>{
 
    // const messages = await req.consumeFlash('info');

    const locals = {
        title: 'NodeJs',
        description: 'Free User Management course'
    }

    let perPage = 12;
    let page = req.query.page || 1;

    try {
        const customers = await customer.aggregate([ { $sort: {updateAt: -1 } } ])
        .skip(perPage*page-perPage)
        .limit(perPage)
        .exec();

        const count = await customer.count();

        res.render('index',{ 
        locals,
        customers,
        current: page,
        pages: Math.ceil(count/perPage)
     });
     
    } catch (error) {
        console.log(error);
    }

}

// exports.homepage =async(req,res)=>{
 
//     // const messages = await req.consumeFlash('info');

//     const locals = {
//         title: 'NodeJs',
//         description: 'Free User Management course'
//     }
//     try {
//         const customers = await customer.find({}).limit(22);
//         res.render('index',{ locals, customers });
//     } catch (error) {
//         console.log(error);
//     }

// }
// home 

exports.addCustomer =async(req,res)=>{
    
    const locals = {
        title: 'ADD New Customer',
        description: 'Free User Management course'
    }

    res.render('customer/add',locals);
}

exports.postCustomer =async(req,res)=>{
    
    console.log(req.body);
    
    const newCustomer = new customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        details: req.body.details,
    })

    try {
        await customer.create(newCustomer);
        await req.flash('info','New customer has been added');
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
};

exports.view = async (req,res) => {
    try{
        const Customer = await customer.findOne({_id: req.params.id})

        const locals = {
                    title: 'View Customer Data',
                    description: 'Free User Management course'
        };
        
        res.render('customer/view',{
            locals,
            Customer
        })
    } catch(error){
        console.log(error);
    }
}
exports.edit = async (req,res) => {
    try{
        const Customer = await customer.findOne({_id: req.params.id})

        const locals = {
                    title: 'Edit Customer Data',
                    description: 'Free User Management course'
        };
        
        res.render('customer/edit',{
            locals,
            Customer
        })
    } catch(error){
        console.log(error);
    }
}
exports.editPost = async (req,res) => {
    try{
        await customer.findByIdAndUpdate(req.params.id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            email: req.body.email,
            details: req.body.details,
            updatedAt: Date.now()
        });
        res.redirect(`/edit/${req.params.id}`);
    } catch(error){
        console.log(error);
    }
}
exports.deleteCustomer = async (req,res) => {
    try{
        await customer.deleteOne({_id: req.params.id});
        res.redirect("/");
    } catch(error){
        console.log(error);
    }
}
