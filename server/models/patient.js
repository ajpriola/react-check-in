const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    description: {
        type: String
    }
}, { timestamps: true });

const Patient = module.exports = mongoose.model('patient', PatientSchema);