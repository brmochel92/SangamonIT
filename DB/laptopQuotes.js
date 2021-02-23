const mongoose = require('mongoose');

const laptopquotes = new mongoose.Schema({
    deviceType:{
        type:String
    },
    laptopManufacturer:{
        type:String
    },
    laptopgroupModel:{
        type:String
    },
    laptopModel:{
        type:String
    },
    repairType:{
        type:String
    },
    partSelection:{
        type:String
    },
    partAvailability:{
        type:String
    },
    depositAmount:{
        type:String
    },
    repairScheduled:{
        type:String
    },

});

module.exports = laptopQuotes = mongoose.model('laptopquotes', laptopquotes);