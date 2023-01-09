const express = require('express');
const report = require('../controllers/report');

const router = express.Router();

router.get('/get_current_username/:user_id', report.get_current_username);
router.get('/get_department_list', report.get_dpt_list);
router.get('/get_employee_by_department_report_parameters', report.get_emp_by_dpt_report_prmts );
router.post('/create_employee_by_department_report', report.create_emp_by_dept_rprt);
router.post('/create_leaves_by_department_report', report.create_leaves_by_dept_rprt);
router.get('/create_average_salary_of_departments_report', report.create_avg_salary_by_dept_rprt);
router.get('/get_employee_and_supervisor_report_parameters', report.get_emp_and_supervisor_rprt_prmtrs);
router.post('/create_employee_and_supervisor_report', report.create_emp_and_supervisor_rprt);
router.get('/get_group_employees_report_parameters', report.get_grp_emps_rprt_prmtrs);
router.post('/create_grouped_employee_report', report.create_grpd_emp_rprt);

module.exports = router;