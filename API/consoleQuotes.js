const express = require('express');
const mongoose = require('mongoose');
const consoleQuotes = require('../DB/consoleQuotes');
const route = express.Router();

route.post('/', async(req, res)=>{
    const{deviceType, consoleManufacturer, consoleModel, repairType, partSelection, partAvailability, depositAmount, repairScheduled} = req.body;

    console.log('reached /api/userconsoleQuotes');
    console.log(deviceType);
    console.log(req.body);

    let consolequotes = {};
    consolequotes.deviceType = deviceType;
    consolequotes.consoleManufacturer = consoleManufacturer;
    consolequotes.consoleModel = consoleModel;
    consolequotes.repairType = repairType;
    consolequotes.partSelection = partSelection;
    consolequotes.partAvailability = partAvailability;
    consolequotes.depositAmount = depositAmount;
    consolequotes.repairScheduled = repairScheduled;

    let userconsoleQuotes = new consoleQuotes(consolequotes);
    await userconsoleQuotes.save();
    res.json(userconsoleQuotes);
});

module.exports = route;


