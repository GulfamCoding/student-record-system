
//models/Student.js

const mongoose = require ('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Student must have a name']
    },
    rollNumber:{
        type:String,
        required:[true,'Student must have a roll number'],
        unique: true
    },
    grade:{
        type:String,
        required:[true, 'Student must be assigned a grade']
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
