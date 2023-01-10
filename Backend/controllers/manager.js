const users = require('../database/users');
const getData = require('../database/getData');
const validator = require("../validation/validation");

const view_user = async (req,res)=>{
    users = await users.getEmployee(req.params.user_id);
    phone_numbers = await users.getPhoneNoByEmpId(user.values[0].empId);
    if (users.values.length >= 1){
        return res.status(201).json({
            message: "User " + req.params.user_id + " found",
            data: {...users.values[0], "phone1_id": phone_numbers.values[0].id, "phone1": phone_numbers.values[0].phone_number, "phone2_id":phone_numbers.values[1].id, "phone2":phone_numbers.values[1].phone_number}
        });
    } else {
        return res.status(400).json({
            message: "User cannot be found."
        });
    }
}


const get_supervisor_list = async (req,res)=>{
    const user = await users.getSupervisorList();
    if (user.status){
        return res.status(201).json({
            message: "Users found",
            data: user.values
        });
    } else {
        return res.status(400).json({
            message: "Users cannot be found."
        });
    }
}

const get_supervisor = async (req,res)=>{
    const employee_id = await getData.getEmployeeId(req.params.user_id);     
    const supervisor = await users.getSupervisor(employee_id.values[0].ID);
    if (supervisor.status){
        return res.status(201).json({
            message: "Users found",
            data: supervisor.values
        });
    } else {
        return res.status(400).json({
            message: "Users cannot be found."
        });
    }
}

const get_user_list = async (req,res)=>{
    users = await users.getEmployeeList();

    if (users.values.length >= 1){
        return res.status(201).json({
            message: "Users found",
            data: users.values
        });
    } else {
        return res.status(400).json({
            message: "Users cannot be found."
        });
    }
}

const edit_user = async (req,res)=>{
    const validation_result = validator.employee_update(req);

    if (validation_result.status) {
        return res.status(400).json({
          message: validation_result.message,
        });
    }
    
    department = await getData.getDepartmentById(req.body.dept_id);
    if (department.values.length < 1){
        return res.status(400).json({
            message: "No such department."
        });
    }

    employee_type = await getData.getemployee_typeById(req.body.employee_type_id);
    if (employee_type.values.length < 1){
        return res.status(400).json({
            message: "No such employee type."
        });
    } else if((employee_type.values[0].type == "HR Manager") || (employee_type.values[0].type == "Admin")) {
        return res.status(400).json({
            message: "Invalid employee type."
        });
    }

    marital_status = await getData.getmarital_statusById(req.body.marital_id);
    if (marital_status.values.length < 1){
        return res.status(400).json({
            message: "Invalid marital status"
        });
    }

    const supervisor = await users.isSupervisor(req.body.empId);
    if (employee_type.values[0].type == "Manager"){
        req.body.pay_grade = 3;
    } else if (supervisor) {
        req.body.pay_grade = 2;
    } else {
        req.body.pay_grade = 1;
    }

    employee_status = await getData.getemployee_statusById(req.body.employee_status_id);
    if (employee_status.values.length < 1){
        return res.status(400).json({
            message: "Invalid employee status"
        });
    }

    const rupdate_status= users.updateUser(req);
    if (rupdateStatus.status === true){
        return res.status(201).json({
            message: "User details updated successfully."
        });
    }else{
        return res.status(201).json({
            message: "Updating user details failed."
        });
    }
}

module.exports = {
    view_user,
    get_user_list,
    edit_user,
    get_supervisor_list,
    get_supervisor
}