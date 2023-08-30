const mongoose = require('mongoose');
const {Schema} = mongoose

const JobSchema = new Schema({
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company'
    },
    title: {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true
    },
    experienceRequired: {
        type: Number,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    industry: {
        type: String,
        require: true
    },
    salary: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    opening: {
        type: Number,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    jobType: {
        type: String,
        require: true
    },
    roleCategory: {
        type: String,
        require: true
    },
    skills: {
        type: String,
        require: true
    },
    application:{
        type:Number,
        default: 0
    },
    date:{
        type : Date,
        default: Date.now
    }
});

const Job = mongoose.model('Job',JobSchema);

module.exports = Job;