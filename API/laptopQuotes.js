const express = require('express');
const mongoose = require('mongoose');
const laptopQuotes = require('../DB/laptopQuotes');
const route = express.Router();

route.post('/', async(req, res)=>{
    const{deviceType, laptopManufacturer, laptopgroupModel, laptopModel, repairType, partSelection, partAvailability, depositAmount, repairScheduled} = req.body;

    console.log('reached /api/userlaptopQuotes');
    console.log(deviceType);
    console.log(req.body);

    let laptopquotes = {};
    laptopquotes.deviceType = deviceType;
    laptopquotes.laptopManufacturer = laptopManufacturer;
    laptopquotes.laptopgroupModel = laptopgroupModel;
    laptopquotes.laptopModel = laptopModel;
    laptopquotes.repairType = repairType;
    laptopquotes.partSelection = partSelection;
    laptopquotes.partAvailability = partAvailability;
    laptopquotes.depositAmount = depositAmount;
    laptopquotes.repairScheduled = repairScheduled;

    let userlaptopQuotes = new laptopQuotes(laptopquotes);
    await userlaptopQuotes.save();
    res.json(userlaptopQuotes);
});

module.exports = route;



