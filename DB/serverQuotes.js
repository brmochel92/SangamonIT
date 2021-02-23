const mongoose = require('mongoose');

const serverquotes = new mongoose.Schema({
    deviceType:{
        type:String
    },
    orderType:{
        type:String
    },

});

module.exports = serverQuotes = mongoose.model('serverquotes', serverquotes);