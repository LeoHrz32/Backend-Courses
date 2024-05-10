const mongoose = require('mongoose');

const detailCourse = new mongoose.Schema({
    Elements: [{
        apprentices: [{
            apprenticeId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Apprentice',
                required: true
            }
        }],
        instructors: [{
            instructorId: {
                type: mongoose.Schema.Types.ObjectId,
                ref : 'Instructor',
                required: true
            }
        }],
    }],
}, {timestamps :true});


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true 
    },
    state: {
        type: Number,
        required: true
    },
    detail: [detailCourse]
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;



