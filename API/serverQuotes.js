const express = require('express');
const mongoose = require('mongoose');
const serverQuotes = require('../DB/serverQuotes');
const route = express.Router();

route.post('/', async(req, res)=>{
    const{deviceType, orderType} = req.body;

    console.log('reached /api/userserverQuotes');
    console.log(deviceType);
    console.log(req.body);

    let serverquotes = {};
    serverquotes.deviceType = deviceType;
    serverquotes.orderType = orderType;


    let userserverQuotes = new serverQuotes(serverquotes);
    await userserverQuotes.save();
    res.json(userserverQuotes);
});

module.exports = route;