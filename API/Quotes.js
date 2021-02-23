const express = require('express');
const mongoose = require('mongoose');
const Quotes = require('../DB/Quotes');
const route = express.Router();

route.post('/', async(req, res)=>{
    const{deviceType, deviceManufacturer, devicegroupModel, deviceModel} = req.body;

    console.log('reached /api/userQuotes');
    console.log(deviceType);
    console.log(req.body);

    let quotes = {};
    quotes.deviceType = deviceType;
    quotes.deviceManufacturer = deviceManufacturer;
    quotes.devicegroupModel = devicegroupModel;
    quotes.deviceModel = deviceModel;

    let userQuotes = new Quotes(quotes);
    await userQuotes.save();
    res.json(userQuotes);
});

module.exports = route;