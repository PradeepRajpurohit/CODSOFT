const express = require('express');
const Job = require('../models/Job');

const router = express.Router();

router.get('/', async(req,res)=>{
    const data = await Job.find;
    res.send("hello");
})

module.exports = router;