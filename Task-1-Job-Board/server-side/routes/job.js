const express = require('express');
const Job = require('../models/Job');
const fetchcompany = require('../middleware/fetchcompany');

const router = express.Router();

//create job http://localhost:5000/api/job/createjob
router.post('/createjob',fetchcompany, async(req,res)=>{
    let success = false;
    try {
        const job = await Job.create({
            company: req.company.id,
            title: req.body.title,
            comapnyName:req.body.companyName,
            industry:req.body.industry,
            desc:req.body.desc,
            experienceRequired: req.body.experienceRequired,
            salary: req.body.salary,
            location: req.body.location,
            opening: req.body.opening,
            jobType:req.body.jobType,
            roleCategory:req.body.roleCategory,
            skills:req.body.skills
        })
        success = true;
        res.json({success,job})
    } catch (error) {
        console.log(error);
        res.status(500).send({success,error:"some Internal error occur"});
    }
})

//get all the jobs http://localhost:5000/api/job/getjobs
router.get('/getjobs', async(req,res)=>{
    try {
        const jobs = await Job.find({});
        res.json(jobs)
    } catch (error) {
        console.log(error);
        res.status(500).send("some Internal error occur");
    }
})

//get all the jobs posted by specific company http://localhost:5000/api/job/postedjobs
router.get('/postedjobs', fetchcompany, async(req,res)=>{
    try {
        const jobs = await Job.find({company:req.company.id});
        res.json(jobs)
    } catch (error) {
        console.log(error);
        res.status(500).send("some Internal error occur");
    }
})

//update status of job http://localhost:5000/job/updatestatus:id
router.put('/updatejob/:id', async (req, res) => {
    try {
        let job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).send("Not Found");
        }
        const newJob = {

            company: job.id,
            title: job.title,
            comapnyName:job.companyName,
            industry:job.industry,
            desc:job.desc,
            experienceRequired: job.experienceRequired,
            salary:job.salary,
            location: job.location,
            opening: job.opening,
            jobType:job.jobType,
            roleCategory:job.roleCategory,
            skills:job.skills,
            application: req.body.application
        }

        job = await Job.findByIdAndUpdate(req.params.id, { $set: newJob}, { new: true })
        res.json(job)
    } catch (error) {
        console.log(error);
        res.status(500).send("some internal error");
    }
})

module.exports = router;