const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

JWT_Secret = 'job4u3000';

const router = express.Router();

// ROUTE 1 : Create a User using post '/api/userauth/createuser. Login not required"
router.post('/createuser', async (req, res) => {
    let success = false;
    try {

        //checking if user already exist or not.
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success, error: "User with this email already exists" })
        }

        //creating new user
        const salt = await bcrypt.genSalt(10);
        const setpass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: setpass,
            contactNo: req.body.contactNo,
            intro: req.body.intro,
            education: req.body.education,
            college: req.body.college,
            degree: req.body.email,
            spacialization: req.body.spacialization,
            percentage: req.body.percentage,
            profession: req.body.profession,
            experience: req.body.experience,
            flatNo: req.body.flatNo,
            line1: req.body.line1,
            line2: req.body.line2,
            city: req.body.city,
            pin: req.body.pin,
            state: req.body.state
        });
        const data = {
            user:{
                id:user.id
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


//ROUTE 2 : Authentiction user using: POST "/api/userauth/login. Login not Required"
router.post('/login', async(req,res)=>{
    let success = false;

    const{email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success,error:"Please try to login with correct credentials"});
        }

        console.log(user);
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({success, error:"Please try to login with correct credentials"});
        }
        const data = {
            user:{
                id:user.id
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

//ROUTE 3 : Get Loggedin user details using POST "/api/userauth/getuser". Login required.
router.get('/getuser',fetchuser,async(req,res)=>{
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("some Internal error occur.");
    }
})

module.exports = router;