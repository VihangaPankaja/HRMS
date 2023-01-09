const express = require('express');
const hr_manager = require('../controllers/hr_manager');

const router = express.Router();

router.get('/get_paygrades', hr_manager.get_paygrades);
router.post("/register", hr_manager.register_an_employee)
router.post("/setSupervisor", hr_manager.assign_supervisor )
router.post("/edit_paygrade", hr_manager.edit_paygrade)
router.get('/getJobTitles', hr_manager.getJobTitles);
router.post("/add_title", hr_manager.add_job_title)

module.exports = router;