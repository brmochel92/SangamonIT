const mongoose = require('mongoose');

const consolequotes = new mongoose.Schema({
    deviceType:{
        type:String
    },
    consoleManufacturer:{
        type:String
    },
    consoleModel:{
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

module.exports = consoleQuotes = mongoose.model('consolequotes', consolequotes);