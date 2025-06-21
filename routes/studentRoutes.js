const express = require ('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authController = require ('../controllers/authController');

//All routes below are protected
router.use(authController.protect);

router
.route('/')
.post(studentController.createStudent)
.get(studentController.getAllStudents);
router
.route('/:id')
.get(studentController.getStudentByID)
.patch(studentController.updatedStudent)
.delete(studentController.deleteStudent);

module.exports = router;