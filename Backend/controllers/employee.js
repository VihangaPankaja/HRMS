const leaves = require('../database/leaves');
const getdata = require('../database/getData');

const leave_apply = async (req,res)=>{

    employee_id = await getdata.getEmployeeId(req.user.userId);

    count_res = await getdata.getAvailableLeaveCount(employee_id.values[0].ID);
    const available_leave_count = count_res.values[0]["available_leaves(" + employee_id.values[0].ID + ")"];

    if (available_leave_count <= 0){
        return res.status(400).json({
            message: "Maximum allowable number of leaves has already been exceeded"
        });
    }

    submission_status = await leaves.submitLeave(req, employee_id.values[0].ID);

    if (submission_status.status === true){
        return res.status(201).json({
            message: "Leave submitted successfully."
        });
    }
    
    else{
        console.log("Leave submission failed");
        return res.status(400).json({
            message: "Leave submission failed."
        });
    }
}

const get_leaves = async (req,res)=>{

    employee_id = await getdata.getEmployeeId(req.user.userId);

    leaveRequests = await leaves.get_leavesByEmpId(employee_id.values[0].ID);

    if (res.status){
        return res.status(201).json({
            message: "User " + req.params.user_id + " found",
            data: leaveRequests.values
        });
    } else {
        return res.status(400).json({
            message: "Cannot get leave requests"
        });
    }
}

module.exports = {
    leave_apply,
    get_leaves
}