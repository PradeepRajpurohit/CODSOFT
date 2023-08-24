const mongoose = require('mongoose');
const {Schema} = mongoose;


const CompanySchema = new Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    intro: {
        type: String,
        require:true
    },
    industryType: {
        type: String,
        require:true
    },
    founded: {
        type: Number,
        require:true
    },
    companySize: {
        type: Number,
        require:true
    },
    buildingName: {
        type: String,
        // require:true
    },
    line1: {
        type: String,
        // require:true
    },
    line2: {
        type: String,
        // require:true
    },
    city: {
        type: String,
        require:true
    },
    pin: {
        type: Number,
        require:true
    },
    state: {
        type: String,
        require:true
    },
    date:{
        type : Date,
        default: Date.now
    }
});

const Company = mongoose.model('Company',CompanySchema);

module.export = Company;