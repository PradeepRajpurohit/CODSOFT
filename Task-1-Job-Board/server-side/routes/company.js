const express = require('express');
const Company = require('../models/Company');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const fetchcompany = require('../middleware/fetchcompany');


JWT_Secret = 'job4u3000';

const router = express.Router();

// ROUTE 1 : Create a Company using post '/api/companyauth/createcompany. Login not required"
router.post('/createcompany', async (req, res) => {
    let success = false;
    try {

        //checking if company already exist or not.
        let company = await Company.findOne({ email: req.body.email });
        if (company) {
            return res.status(400).json({success, error: "Company with this email already exists" })
        }

        //creating new company
        const salt = await bcrypt.genSalt(10);
        const setpass = await bcrypt.hash(req.body.password, salt);
        company = await Company.create({
            name: req.body.name,
            email: req.body.email,
            password: setpass,
            intro: req.body.intro
        });
        const data = {
            company:{
                id:company.id
            }
        }
        success=true;
        const authToken = JWT.sign(data, JWT_Secret);
        res.json({success, authToken});
    }

    //catching error if any occur
    catch (error) {
        console.log(error.message);
        res.status(500).send("some Internal error occur.");
    }
})




//ROUTE 2 : Authentiction company using: POST "/api/companyauth/login. Login not Required"
router.post('/login', async(req,res)=>{
    let success = false;

    const{email,password} = req.body;
    try {
        const company = await Company.findOne({email});
        if(!company){
            return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }

        console.log(company);
        const passwordCompare = bcrypt.compare(password,company.password);
        if(!passwordCompare){
            return res.status(400).json({success, error:"Please try to login with correct credentials"});
        }
        const data = {
            company:{
                id:company.id
            }
        }
        success = true;
        const authToken = JWT.sign(data, JWT_Secret);
        res.json({success,authToken});

    } catch (error) {
        console.log(error.message);
        res.status(500).send("some Internal error occur.");
    }
})

//ROUTE 3 : Get Loggedin company details using POST "/api/companyauth/getcompany". Login required.
router.get('/getcompany',fetchcompany,async(req,res)=>{
    try {
        const companyId = req.company.id;
        const company = await Company.findById(companyId).select("-password");
        res.json(company);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some Internal error occur.");
    }
})

//Route 4 : Update company info using http://localhost:5000/api/comapnyauth/updateinfo
router.put('/updateinfo', fetchcompany, async (req, res) => {
    try {
        const companyId = req.company.id;
        const company = await User.findById(companyId);
        if (!company) {
            return res.status(404).send("Not Found");
        }
        const info = {

            name: company.name,
            email: company.email,
            password: company.password,
            intro: req.body.intro,
            industryType: req.body.industryType,
            founded: req.body.founded,
            companySize: req.body.companySize,
            buildingName: req.body.buildingName,
            line1: req.body.line1,
            line2: req.body.line2,
            city: req.body.city,
            pin: req.body.pin,
            state: req.body.state
        }

        company = await Company.findByIdAndUpdate(companyId, { $set: info }, { new: true })
        res.json(company)
    } catch (error) {
        console.log(error);
        res.status(500).send("some internal error");
    }
})

module.exports = router;