const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();
const { v4: uuidv4 } = require('uuid');

route.post('/', async(req, res)=>{
    const{firstName, lastName, phoneNumber, emailAddress, password,} = req.body;

    console.log('reached /api/userModel');
    console.log(firstName);
    console.log(req.body);

    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.emailAddress = emailAddress;
    user.phoneNumber = phoneNumber;
    user.password = password;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

route.post('/signIn', async(req, res)=>{
    const {emailAddress, password} = req.body;
    console.log('reached signIn');
    console.log(emailAddress);
    console.log(password);
    
    const token = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    let user = await User.findOne({emailAddress, password});
    user.token = token;
    await user.save();
    res.json({token}); //this content 
});

route.post('/profile', async(req, res)=>{
    const {token} = req.body;

    console.log('reached profile');
    console.log(token);
    
    let user = await User.findOne({token});    
    user.password='';
    res.json({user}); //this content 
});


module.exports = route;