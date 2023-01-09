const reportData = require('../database/reportData');

const get_dpt_list = async (req,res)=>{
    dept_list= await reportData.get_dpt_list();

    if (departmentList.values.length >= 1){
        return res.status(201).json({
            message: "Departments found",
            data: departmentList.values
        });
    } else {
        return res.status(400).json({
            message: "Departments cannot be found."
        });
    }
}

const get_emp_by_dpt_report_prmts  = async (req, res) => {
    parameter_list = await reportData.getparameter_list();

    if (parameter_list.values.length >= 1){
        return res.status(201).json({
            message: "Parameters found",
            data: parameter_list.values
        });
    } else {
        return res.status(400).json({
            message: "Parameters cannot be found."
        });
    }
}

const get_current_username = async (req, res) => {
    user = await reportData.get_current_username(req.params.user_id);

    if (user.values.length >= 1){
        return res.status(201).json({
            message: "User found",
            data: user.values
        });
    } else {
        return res.status(400).json({
            message: "User cannot be found."
        });
    }
}

const create_emp_by_dept_rprt = async (req, res) => {
    const department = req.body.department;
    const checked_prmtr_list = req.body.parameters;
    const valid_prmtr_list = [];

    allUserData = await reportData.getUserDataByDepartment(department);
    allparameter_list = await reportData.getparameter_list();

    all_prmtrs_JSON = JSON.parse(JSON.stringify(allparameter_list.values));
    all_user_data_JSON = JSON.parse(JSON.stringify(allUserData.values));

    for (var i = 0; i < all_prmtrs_JSON.length; i++) {
        if ( checked_prmtr_list[i] )
            valid_prmtr_list.push(all_prmtrs_JSON[i].COLUMN_NAME);
    }

    for (var i = 0; i < all_user_data_JSON.length; i++) {
        var j = 0;
        Object.keys(all_user_data_JSON[i]).forEach(function(key) {
            if ( !checked_prmtr_list[j] )
                delete(all_user_data_JSON[i][key]);
            j++;
        });
    }

    if (all_user_data_JSON.length >= 1){
        return res.status(201).json({
            message: "User found",
            data: [valid_prmtr_list, all_user_data_JSON]
        });
    } else {
        return res.status(201).json({
            message: "No employees in chosen department",
            data: []
        });
    }
    
}

const create_leaves_by_dept_rprt = async (req, res) => {
    const from = req.body.from;
    const to = req.body.to;

    dept_list= await reportData.get_dpt_list();
    leaves_by_dept_raw = await reportData.get_leavesByDepartment(from, to);

    leaves_by_dept_JSON = JSON.parse(JSON.stringify(leaves_by_dept_raw.values));

    let leaves_by_all_depts_JSON = [];

    for (var i = 0; i < departmentList.values.length; i++) {
        let department = departmentList.values[i].Name;
        let num_leaves = 0;
        for (var j = 0; j < leaves_by_dept_JSON.length; j++) {
            if (leaves_by_dept_JSON[j].department == department) {
                num_leaves = leaves_by_dept_JSON[j].total_leaves;
            }  
        }
        let leave_dept_pair = {"department":department, "total_leaves":num_leaves};
        leaves_by_all_depts_JSON[i] = leave_dept_pair;
    }

    return res.status(201).json({
        message: "Leaves taken in a given period",
        data: leaves_by_all_depts_JSON
    });

}

const create_avg_salary_by_dept_rprt = async (req, res) => {
    avg_salaries_by_depts = await reportData.getAverageSalaryByDepartment();

    if (avg_salaries_by_depts.values.length >= 1){
        return res.status(201).json({
            message: "Average salary by department view found",
            data: avg_salaries_by_depts.values
        });
    } else {
        return res.status(400).json({
            message: "Average salary by department view could not be found."
        });
    }
}

const get_emp_and_supervisor_rprt_prmtrs = async (req, res) => {
    parameter_list = await reportData.getEmployeeAndSupervisorparameter_list();

    if (parameter_list.values.length >= 1){
        return res.status(201).json({
            message: "Parameters found",
            data: parameter_list.values
        });
    } else {
        return res.status(400).json({
            message: "Parameters could not be found."
        });
    }
}

const create_emp_and_supervisor_rprt = async (req, res) => {
    const checked_prmtr_list = req.body.parameters;
    const valid_prmtr_list = [];

    allUserData = await reportData.getEmployeesAndSupervisors();
    allparameter_list = await reportData.getEmployeeAndSupervisorparameter_list();

    all_prmtrs_JSON = JSON.parse(JSON.stringify(allparameter_list.values));
    all_user_data_JSON = JSON.parse(JSON.stringify(allUserData.values));

    for (var i = 0; i < all_prmtrs_JSON.length; i++) {
        if ( checked_prmtr_list[i] )
            valid_prmtr_list.push(all_prmtrs_JSON[i].COLUMN_NAME);
    }

    for (var i = 0; i < all_user_data_JSON.length; i++) {
        var j = 0;
        Object.keys(all_user_data_JSON[i]).forEach(function(key) {
            if ( !checked_prmtr_list[j] )
                delete(all_user_data_JSON[i][key]);
            j++;
        });
    }

    if (all_user_data_JSON.length >= 1){
        return res.status(201).json({
            message: "Employees and supervisors found.",
            data: [valid_prmtr_list, all_user_data_JSON]
        });
    } else {
        return res.status(201).json({
            message: "Employee has not been assigned a supervisor.",
            data: []
        });
    }
    
}

const get_grp_emps_rprt_prmtrs = async (req, res) => {
    parameter_list = await reportData.get_grp_emps_rprt_prmtrs();

    if (parameter_list.values.length >= 1){
        return res.status(201).json({
            message: "Parameters found",
            data: parameter_list.values
        });
    } else {
        return res.status(400).json({
            message: "Parameters could not be found."
        });
    }
}

const create_grpd_emp_rprt = async (req, res) => {
    const checked_prmtr = req.body.parameter;

    count_emps_by_grping = await reportData.getEmployeeCountByGrouping(checked_prmtr);

    if (count_emps_by_grping.values.length >= 1){
        return res.status(201).json({
            message: "Average salary by department view found",
            data: count_emps_by_grping.values
        });
    } else {
        return res.status(400).json({
            message: "Cannot find Average salary by department view"
        });
    }
    
}

module.exports = {
    get_dpt_list,
    get_emp_by_dpt_report_prmts ,
    get_current_username,
    create_emp_by_dept_rprt,
    create_leaves_by_dept_rprt,
    create_avg_salary_by_dept_rprt,
    get_emp_and_supervisor_rprt_prmtrs,
    create_emp_and_supervisor_rprt,
    get_grp_emps_rprt_prmtrs,
    create_grpd_emp_rprt
}