const express = require('express');
const Job = require('../models/Job');
const fetchcompany = require('../middleware/fetchcompany');

const router = express.Router();

//create job http://localhost:5000/api/job/createjob
router.post('/createjob',fetchcompany, async(req,res)=>{
    try {
        const job = await Job.create({
            company: req.company.id,
            title: req.body.title,
            experienceRequired: req.body.experienceRequired,
            salary: req.body.salary,
            location: req.body.location,
            opening: req.body.opening,
            role: req.body.role,
            jobType:req.body.jobType,
            roleCategory:req.body.roleCategory,
            skills:req.body.skills
        })
        res.json(job)
    } catch (error) {
        console.log(error);
        res.status(500).send("some Internal error occur");
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

module.exports = router;