const express = require('express');
const Application = require('../models/Application');
const fetchuser = require('../middleware/fetchuser');
const Job = require('../models/Job');

const router = express.Router();

//create Application http://localhost:5000/api/application/createapplication
router.post('/createapplication', fetchuser, async (req, res) => {
    let success = false;
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
        success = true;
        res.json({ success, application });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success, error: "some internal error occur" });
    }
})

//get application of job applied by user http://localhost:5000/api/application/getappliedjob
router.get('/getappliedjob', fetchuser, async (req, res) => {
    try {
        let appliedjob = await Application.find({ user: req.user.id });
        let jobApplied = [];
        for (let i = 0; i < appliedjob.length; i++) {
            let jobDetail = await getJobDetail(appliedjob[i]);
            // jobDetail["status"] = appliedjob[i].status;
            const other = {
                'status':appliedjob[i].status,
                'date':appliedjob[i].date
            }
            jobApplied.push({jobDetail, other}) 
        }
        console.log(jobApplied)
        res.json(jobApplied)
    } catch (error) {
        console.log(error);
        res.status(500).send("some internal error occur");
    }
})

async function getJobDetail(appliedjob) {
    let x = await Job.findById(appliedjob.job);
    return x;
}

//get all the application recieved on perticular job http://localhost:5000/application/getapplication
router.post('/getapplication', async (req, res) => {
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

            user: application.user,
            name: application.name,
            email: application.email,
            experience: application.experience,
            intro: application.intro,
            skills: application.skills,
            status: req.body.status
        }

        application = await Application.findByIdAndUpdate(req.params.id, { $set: newApplication }, { new: true })
        res.json(application)
    } catch (error) {
        console.log(error);
        res.status(500).send("some internal error");
    }
})


module.exports = router;