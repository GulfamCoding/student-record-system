
//controllers/studentController.js
const Student = require('../models/studentModel');

const createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json({
            status: 'success',
            data: newStudent
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

const getStudentByID = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            res.status(404).json({
                status: 'fail',
                message: 'No student found with this ID'
            })
        } res.status(200).json({
            status: 'success',
            data: student
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        })
    }
}

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            status: 'success',
            results: students.length,
            data: students
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch students'
        });
    }
};

const updatedStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!student) {
            return res.status(404).json({
                status: 'fail',
                message: 'No student found with this ID'
            });
        }
        res.status(200).json({
            status: 'success',
            data: student
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
            if(!student) {
                res.status(404).json({
                    status: 'fail',
                    message: 'No student found with this ID'
                })
            } 
            res.status(200).json({
                status: 'success',
                data: null
            })
        
    } catch (err) {
            res.status(400).json({
                status:'fail',
                message:err.message
            })
    } 
}
module.exports = { getStudentByID, getAllStudents, createStudent, updatedStudent , deleteStudent };
