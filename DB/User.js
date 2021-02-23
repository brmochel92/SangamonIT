const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    emailAddress:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    password:{
        type:String
    }, 
    token: {
        type:String
    },
});

module.exports = User = mongoose.model('user', user);