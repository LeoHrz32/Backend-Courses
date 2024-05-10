const mongoose = require('mongoose');

const apprenticeSchema = new mongoose.Schema({
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
        
    // Otros campos que puedas necesitar para tu modelo de cliente
}, { timestamps: true });

const Apprentice = mongoose.model('apprentices', apprenticeSchema);

module.exports = Apprentice;