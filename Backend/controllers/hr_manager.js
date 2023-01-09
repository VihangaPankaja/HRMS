const db = require('../database/db_helper');
const users = require('../database/users');
const getData = require('../database/getData');
const validator = require("../validation/validation");
const setData = require("../database/setData");

const get_paygrades = async (req,res)=>{
    const paygrades = await getData.getAllPaygrades();
    if (paygrades.status){
        return res.status(200).json(paygrades.values);
    } else {
        return res.status(200).json({
            message: "Cannot get paygrade details"
        })
    }
}

const assign_supervisor  = async (req,re)=>{
    db.beginTransaction( err => {
        if (err) {
            console.error("Transaction failed", err);
            res.status=false;
            return;
        }
        const sql_insert_new_supervisor = "INSERT INTO `supervisor` (employee_id,supervisor_id) VALUES (?,?)";
        const employee_id = req.body.employee_id;
        const supervisor_id = req.body.supervisor_id;
        db.query(sql_insert_new_supervisor,[employee_id,supervisor_id],(err,result) => {
            if(err){
                console.log(err)
            }else{
                const sql_insert_new_supervisor = "UPDATE employee SET paygrade=2 WHERE id = ?";
                db.query(sql_insert_new_supervisor,[supervisor_id],(err,result) => {
                    if(err){
                        console.log(err)
                    }else{
                        db.commit(function (err) {
                            if (err) {
                                db.rollback();
                                console.error("Commit error", err);
                                res.status=false;
                                return;
                            }
                            console.log("New supervisor was appointed succesfully");                                                                                    
                        });
                    }
                });
            }
        });
});
}

const register_an_employee = async (req,res)=>{
    const validation_result = validator.employee_signup(req);

    if (validation_result.status) {
        return res.status(400).json({
          message: validation_result.message,
        });
    }

    check_if_exists = await users.getUserByUsername(req.body.username);
    if (check_if_exists.values.length >= 1){
        return res.status(400).json({
            message: "Username already exists"
        });
    }
    
    department = await getData.getDepartmentById(req.body.department);
    if (department.values.length < 1){
        return res.status(400).json({
            message: "No such department."
        });
    }

    employee_type = await getData.getemployee_typeById(req.body.type);
    if (employee_type.values.length < 1){
        return res.status(400).json({
            message: "No such employee type."
        });
    } else if((employee_type.values[0].type == "HR Manager") || (employee_type.values[0].type == "Admin")) {
        return res.status(400).json({
            message: "Invalid employee type."
        });
    }

    marital_status = await getData.getmarital_statusById(req.body.marital_status);
    if (marital_status.values.length < 1){
        return res.status(400).json({
            message: "Invalid marital status"
        });
    }

    if (employee_type.values[0].type == "Manager"){
        req.body.paygrade = 3;
    } else {
        req.body.paygrade = 1;
    }

    employee_status = await getData.getemployee_statusById(req.body.employee_status);
    if (employee_status.values.length < 1){
        return res.status(400).json({
            message: "Invalid employee status"
        });
    }

    const registration_status = await users.registerUser(req);
    if (registration_status.status === true){
        return res.status(201).json({
            message: "User was added successfully."
        });
    }else{
        return res.status(400).json({
            message: "User registration failed."
        });
    }
}

const add_job_title = async (req,res)=>{
    const validation_result = validator.add_job_title(req);

    if (validation_result.status) {
        return res.status(400).json({
          message: validation_result.message,
        });
    }

    const add_title_status = await setData.add_job_title(req.body);
    if (add_title_status.status === true){
        return res.status(201).json({
            message: "New Job Title added successfully."
        });
    }else{
        return res.status(400).json({
            message: "New Job Title addition failed."
        });
    }
}

const edit_paygrade = async (req,res)=>{
    
    const update_status= await setData.updatePaygrade(req.body);

    if (update_status.status === true){
        return res.status(201).json({
            message: "Paygrade updated successfully."
        });
    }else{
        return res.status(400).json({
            message: "Updating paygrade failed."
        });
    }
}

const get_job_title= async (req, res)=>{
    const job_title = await getData.getJobTitles();
    if (job_title.status){
        return res.status(200).json(job_title.values);
    } else {
        return res.status(200).json({
            message: "Cannot get job title details."
        })
    }
}


module.exports = {
    register_an_employee,
    assign_supervisor ,
    get_paygrades,
    edit_paygrade,
    get_job_title,
    add_job_title
}