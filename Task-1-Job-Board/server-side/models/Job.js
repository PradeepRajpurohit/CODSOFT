const mongoose = require('mongoose');
const {Schema} = mongoose

const JobSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    experienceRequired: {
        type: Number,
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
    date:{
        type : Date,
        default: Date.now
    }
});

const Job = mongoose.model('Job',JobSchema);

module.exports = Job;