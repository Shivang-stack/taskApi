const router = require('express').Router();
const User = require('../model/User');
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation} = require('../validation');



router.post('/register',async(req,res)=>{
    //validate before submit
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking if the user already exists in db
    const emailExist = await User.findOne({email : req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    //hash passwords
    const salt = await bcrypt.gentSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    //create user
    const user = new User({
        name : req.body.name,
        email: req.body.email,
        password : hashedpassword,
        phone_no : req.body.phone_no
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});

//login
router.post('/login', async (req,res) => {
    //validate before submit
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking if the user exists in db
    const emailExist = await User.findOne({email : req.body.email});
    if(!emailExist) return res.status(400).send('Email or password wrong');

    //Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Email or password wrong');
    
    //create and assign token
    const token = jwt.sign({_id : user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

    res.send('Logged in!');

});

module.exports = router;