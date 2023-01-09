const express = require('express');
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');

const Router = express.Router();

// admin login post - theAdminLogin
Router.post('/login', adminController.theAdminLogin);

// HR manager add post - addHRManagerDetails
Router.post('/addHR', auth.authRequire, adminController.addHRManagerDetails);

// Receive Datails abput HR Manager
Router.get('/getHRM', auth.authRequire, adminController.getHRMInfo);

Router.get("/getHRMDetails", auth.authRequire, adminController.getHRMDetails);

module.exports = Router;