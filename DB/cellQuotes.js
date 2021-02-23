const mongoose = require('mongoose');

const cellquotes = new mongoose.Schema({
    cellManufacturer:{
        type:String
    },
    cellModel:{
        type:String
    },
    repairType:{
        type:String
    },
    cellquotePrice:{
        type:String
    },
    quoteFirstName:{
        type: String
    },
    quoteLastName:{
        type: String
    },
    quotePhoneNumber:{
        type: String
    },
    quoteEmailAddress:{
        type: String
    },
    quoteStreetAddress:{
        type: String
    },
    quoteCityAddress:{
        type: String
    },
    quoteState:{
        type: String
    },
    quoteZip:{
        type: Number
    },

});

module.exports = cellQuotes = mongoose.model('cellquotes', cellquotes);