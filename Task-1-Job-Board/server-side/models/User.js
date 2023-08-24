const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema =  new Schema ({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    contactNo:{
        type: Number,
        require:true
    },
    intro: {
        type: String,
        require: true
    },
    education: {
        type: String,
        require: true
    },
    college: {
        type: String,
        require: true
    },
    degree: {
        type: String,
        require: true
    },
    spacialization: {
        type: String,
        require: true
    },
    percentage: {
        type: Number,
        require: true
    },
    profession: {
        type: String,
        require: true
    },
    experience: {
        type: Number,
        require: true
    },
    flatNo: {
        type: Number,
        // require: true
    },
    line1: {
        type: String,
        // require: true
    },
    line2: {
        type: String,
        // require: true
    },
    city: {
        type: String,
        require: true
    },
    pin: {
        type: Number,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    date:{
        type : Date,
        default: Date.now
    }

});

const User = mongoose.model('User',UserSchema);

module.export = User;