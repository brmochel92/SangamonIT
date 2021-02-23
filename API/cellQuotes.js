const express = require('express');
const mongoose = require('mongoose');
const cellQuotes = require('../DB/cellQuotes');
const route = express.Router();

route.post('/', async(req, res)=>{
    const{cellManufacturer, cellModel, repairType, cellquotePrice, 
        quoteFirstName, quoteLastName, quotePhoneNumber, quoteEmailAddress, 
        quoteStreetAddress, quoteCityAddress, quoteState, quoteZip} = req.body;

    console.log('reached /api/usercellQuotes');
    console.log(cellManufacturer);
    console.log(req.body);

    let cellquotes = {};
    cellquotes.cellManufacturer = cellManufacturer;
    cellquotes.cellModel = cellModel;
    cellquotes.repairType = repairType;
    cellquotes.cellquotePrice = cellquotePrice;
    cellquotes.quoteFirstName = quoteFirstName;
    cellquotes.quoteLastName = quoteLastName;
    cellquotes.quotePhoneNumber = quotePhoneNumber;
    cellquotes.quoteEmailAddress = quoteEmailAddress;
    cellquotes.quoteStreetAddress = quoteStreetAddress;
    cellquotes.quoteCityAddress = quoteCityAddress;
    cellquotes.quoteState = quoteState;
    cellquotes.quoteZip = quoteZip;

    let usercellQuotes = new cellQuotes(cellquotes);
    await usercellQuotes.save();
    res.json(usercellQuotes);
});

route.get('/:id', async(req, res) => {
    console.log('reached /api/usercellQuotes/:id');
   let qoute = await  cellQuotes.findOne(req.id)
   res.json(qoute)
})

module.exports = route;



