const express = require('express');
const Company = require('../models/Company');

const router = express.Router();

router.get('/', async(req,res)=>{
    const data = await Company.find;
    res.send("comapny");
    console.log("comapny")
})

module.exports = router;