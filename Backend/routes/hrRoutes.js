const express = require('express');
const hr_manager = require('../controllers/hr_manager');

const router = express.Router();

router.get('/get_pay_grades', hr_manager.get_pay_grades);
router.post("/register", hr_manager.register_an_employee)
router.post("/setSupervisor", hr_manager.assign_supervisor )
router.post("/edit_pay_grade", hr_manager.edit_pay_grade)
router.get('/getJobTitles', hr_manager.getJobTitles);
router.post("/add_title", hr_manager.add_job_title)

module.exports = router;