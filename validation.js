//Validation
const Joi = require('@hapi/joi');

//register validation
const registerValidation =() =>{

    const schema ={
        name : Joi.string().min(6).required(),
        email : Joi.string().min(6).required().email(),
        password : Joi.string().min(8).required(),
        phone_no : Joi.string().min(10).required()
    
    };
    return Joi.validate(data,schema);
}

//login validation
const loginValidation = data =>{

    const schema ={
        name : Joi.string().min(6).required(),
        email : Joi.string().min(6).required().email(),
        password : Joi.string().min(8).required(),
        phone_no : Joi.string().min(10).required()
    
    };
    return Joi.validate(data,schema);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;