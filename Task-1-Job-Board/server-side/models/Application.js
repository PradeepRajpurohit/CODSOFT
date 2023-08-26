// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const ApplicationSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    job:{
        type: String,
        require:true
    },
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    experience: {
        type: String,
        require:true
    },
    intro: {
        type: String,
        require:true
    },
    skills: {
        type: String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    date:{
        type : Date,
        default: Date.now
    }
});

const Application = mongoose.model('Application',ApplicationSchema);

module.exports = Application;