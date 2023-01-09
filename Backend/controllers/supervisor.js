const leaves = require('../database/leaves');
const getdata = require('../database/getData');

const get_leave_rqsts = async (req,res)=>{

    supervisor_id = await getdata.getEmployeeId(req.user.userId);     
    leaveRequests = await leaves.get_leavesBySupId(supervisor_id.values[0].ID);
    
    if (res.status){
        return res.status(201).json({
            message: "User " + req.params.user_id + " found",
            data: leaveRequests.values
        });
    } else {
        return res.status(400).json({
            message: "Cannot get leave requests."
        });
    }
}

const review_leave_rqsts = async (req,res)=>{
    //leave_id = ?;
    //supervisor_id = ?;
    //is correct supervisor
    const reviewer = await leaves.getSupervisor(leave_id);
    if (reviewer.values[0].id == supervisor_id){
        return res.status(400).json({
            message: "This is not the correct supervisor."
        });
    }
    
    //is leave status TBD
    const leave_status = await leaves.get_leavestatus(leave_id);
    if (leave_status.values[0].status == "TBD"){
        return res.status(400).json({
            message: "This request has been already reviewed."
        });
    }

    const review_status = await leaves.reviewRequest(leave_id, status);
    if (registration_status.status === true){
        return res.status(200).json({
            message: "Request successfully reviewed."
        });
    }else{
        return res.status(400).json({
            message: "Reviewing request failed."
        });
    }
}


const get_leave_data = async (req,res)=>{
    employee_id = req.params.employee_id;     
    leave_data = await leaves.get_leavesData(employee_id);

    if (res.status){
        return res.status(201).json({
            message: "User " + req.params.user_id + " found",
            data: leave_data.values
        });
    } else {
        return res.status(400).json({
            
            message: "Cannot get leave requests."
        });
    }
}

const accept_leave = async (req,res)=>{
    leave_id = req.params.id;
     
    accepted = await leaves.setAcceptLeave(leave_id);

    if (res.status){
        return res.status(201).json({
            message: "Leave approved.",
        });
    } else {
        return res.status(400).json({
            message: "Cannot Update the status in leave table."
        });
    }
}

const reject_leave = async (req,res)=>{
    leave_id = req.params.id;
     
    rejected = await leaves.setRejectLeave(leave_id);

    if (res.status){
        return res.status(201).json({
            message: "Leave rejected.",
        });
    } else {
        return res.status(400).json({
            message: "Cannot Update status in leave table."
        });
    }
}

module.exports = {
    get_leave_rqsts,
    review_leave_rqsts,
    get_leave_data,
    accept_leave,
    reject_leave,
}