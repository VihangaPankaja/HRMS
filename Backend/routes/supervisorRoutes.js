const express = require('express');
const supervisor = require('../controllers/supervisor');
const {verify_token}  = require("../middleware/authentication");

const router = express.Router();

router.get("/get_leave_requests", verify_token, supervisor.get_leave_rqsts);
router.get("/getleave_data/:employee_id", verify_token, supervisor.get_leave_data);
router.post("/accept_leave/:id", verify_token, supervisor.accept_leave);
router.post("/reject_leave/:id", verify_token, supervisor.reject_leave);


module.exports = router;