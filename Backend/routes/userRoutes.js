const express = require('express');
const user = require('../controllers/userController');
const {verify_token}  = require("../middleware/authentication");
const employee = require('../controllers/employee');
const router = express.Router();

router.post('/apply_leave', verify_token, employee.leave_apply);
router.post('/login', user.user_login);
router.get('/getProfile',verify_token, user.getProfile);
router.get("/get_leaves/:id", verify_token, employee.get_leaves);
module.exports = router;