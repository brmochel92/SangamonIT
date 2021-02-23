const express = require('express');
const mongoose = require('mongoose');
const custompcQuotes = require('../DB/custompcQuotes');
const route = express.Router();

route.post('/', async(req, res)=>{
    const{deviceType, orderType} = req.body;

    console.log('reached /api/usercustompcQuotes');
    console.log(deviceType);
    console.log(req.body);

    let custompcquotes = {};
    custompcquotes.deviceType = deviceType;
    custompcquotes.orderType = orderType;


    let usercustompcQuotes = new custompcQuotes(custompcquotes);
    await usercustompcQuotes.save();
    res.json(usercustompcQuotes);
});

module.exports = route;



