const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        min : 2,
        max : 255
    },
    email : {
        type: String,
        required: true,
        min : 6,
        max : 255
    },
    password : {
        type : String,
        required : true,
        max : 1024,
        min : 8
    },
    phone_no : {
        type : String,
        required : true,
        max : 10,
        min :10
    }



});

const ContactSchema = mongoose.Schema({
    name_contact : {
        type : String,
        required : true
    },
    email_contact :{
        type: String,
        required: true
    },
    ph_no_contact : {
        type : String,
        required : true,
        max : 10,
        min :10
    }
});

module.exports = mongoose.model('User',userSchema);
module.exports = mongoose.model('Contact',userSchema); 