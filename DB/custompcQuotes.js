const mongoose = require('mongoose');

const custompcquotes = new mongoose.Schema({
    deviceType:{
        type:String
    },
    orderType:{
        type:String
    },


});

module.exports = custompcQuotes = mongoose.model('custompcquotes', custompcquotes);