const express = require('express');
const manager = require('../controllers/manager');
const {verify_token, has_paygrade}  = require("../middleware/authentication");
const router = express.Router();

router.get('/view_user/:user_id', has_paygrade(['level 1', 'level 2', 'level 3', 'level 4']), manager.view_user);
router.get('/get_users_list', has_paygrade(['level 3', 'level 4']), manager.get_user_list);
router.get('/get_supervisor_list', manager.get_supervisor_list);
router.get('/get_supervisor/:user_id', manager.get_supervisor);
router.post('/edit_user/:user_id', has_paygrade(['level 3', 'level 4']), manager.edit_user);

module.exports = router;