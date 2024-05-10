const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    documentType: {
        type: Number,
        required: true
    },
    documentNumber: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    profession:{
        type: String,
        required: true
    }
    
}, { timestamps: true });

const Instructor = mongoose.model('instructors', instructorSchema);

module.exports = Instructor;