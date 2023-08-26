const express = require('express');
const Application = require('../models/Application');
const fetchuser = require('../middleware/fetchuser');
const Job = require('../models/Job');

const router = express.Router();

//create Application http://localhost:5000/api/application/createapplication
router.post('/createapplication', fetchuser, async (req, res) => {
    try {
        const application = await Application.create({
            user: req.user.id,
            name: req.body.name,
            job: req.body.job,
            email: req.body.email,
            experience: req.body.experience,
            intro: req.body.intro,
            skills: req.body.skills,
            status: "Pending"
        })
        res.json(application);
    } catch (error) {
        console.log(error);
        res.status(500).send("some internal error occur");
    }
})

//get application of job applied by user http://localhost:5000/api/application/getappliedjob
router.get('/getappliedjob', fetchuser, async (req, res) => {
    try {
        let appliedjob = await Application.find({ user: req.user.id });
        let jobDetail = await getJobDetail(appliedjob);

        res.json([appliedjob, jobDetail])
    } catch (error) {
        console.log(error);
        res.status(500).send("some internal error occur");
    }
})

async function getJobDetail(appliedjob) {
    const jobPromises = appliedjob.map(async (appl) => {
        let x = await Job.findById(appl.job);
        console.log(x);
        return x;
    })
    try {
        const jobDetails = await Promise.all(jobPromises);
        return jobDetails;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//get all the application recieved on perticular job http://localhost:5000/application/getapplication
router.get('/getapplication', async (req, res) => {
    try {
        const application = await Application.find({ job: req.body.job })
        res.json(application);
    } catch (error) {
        console.log(error);
        res.status(500).send("internal error occur");
    }
})

//update status of application http://localhost:5000/application/updatestatus:id
router.put('/updatestatus/:id', async (req, res) => {
    try {
        let application = await Application.findById(req.params.id);
        if (!application) {
            return res.status(404).send("Not Found");
        }
        const newApplication = {

            user:application.user,
            name:application.name,
            email:application.email,
            experience:application.experience,
            intro:application.intro,
            skills:application.skills,
            status:req.body.status
        }

        application = await Application.findByIdAndUpdate(req.params.id, {$set: newApplication},{new:true})
        res.json(application)
    } catch (error) {
        console.log(error);
        res.status(500).send("some internal error");
    }
})


module.exports = router;