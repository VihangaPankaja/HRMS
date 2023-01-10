const DB = require('./DB_helper');

const get_LeavesBySupId = (sup_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select 
                    \`leave\`.id, 
                    \`leave\`.emp_ID, 
                    leaves_status.status, 
                    \`leave\`.Date, 
                    \`leave\`.reason, 
                    leave_type.type 
                from \`leave\` join 
                    leave_type join 
                    leaves_status on \`leave\`.type_ID = leave_type.ID and \`leave\`.status = leaves_status.ID 
                where emp_id in (
                    select employee.id emp_id 
                    from employee join supervisor on employee.id = supervisor.emp_id 
                    where supervisor.sup_id = ?);`;
        
        DB.query(sql_query, [sup_Id],  
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(result);
                }
                result.values = _results;
                resolve(result);
        });
    });
}

const get_leavesByEmpId = (emp_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select 
                    \`employee\`.firstname, 
                    \`employee\`.lastname, 
                    \`leaves_status\`.status, 
                    \`leave\`.id, leave_type.type, 
                    \`leave\`.Date, 
                    \`leave\`.reason 
                from 
                    \`employee\` join 
                    \`leaves_status\` join 
                    \`leave\` join leave_type on 
                        \`leave\`.status = \`leaves_status\`.\`ID\` and 
                        \`employee\`.id = \`leave\`.\`emp_ID\` and
                        \`leave\`.type_ID = leave_type.ID 
                where \`leave\`.emp_ID = ?;`;
       
        DB.query(sql_query, [emp_Id],  
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(result);
                }
                result.values = _results;
                resolve(result);
        });
    });
}

const get_LeavesData = (leave_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select 
                    \`employee\`.firstname, 
                    \`employee\`.lastname, 
                    \`leaves_status\`.status, 
                    \`leave\`.id, leave_type.type, 
                    \`leave\`.Date, 
                    \`leave\`.reason 
                from 
                    \`employee\` join 
                    \`leaves_status\` join 
                    \`leave\` join leave_type on 
                        \`leave\`.status = \`leaves_status\`.\`ID\` and 
                        \`employee\`.id = \`leave\`.\`emp_ID\` and 
                        \`leave\`.type_ID = leave_type.ID 
                where \`leave\`.id = ?;`;
        
        DB.query(sql_query, [leave_Id],  
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(result);
                }
                result.values = _results;
                resolve(result);
        });
    });
}

const getSupervisor = (leave_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select supervisor.sup_id 
                from supervisor join \`leave\` on \`leave\`.emp_id = supervisor.emp_id 
                where \`leave\`.id = ?;`;
        
        DB.query(sql_query, [leave_Id],  
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(result);
                }
                result.values = _results;
                resolve(result);
        });
    });
}

const get_leaves_status = (leave_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select leaves_status.status 
                from \`leave\` join leaves_status on \`leave\`.status = leaves_status.id 
                where \`leave\`.id = ? ;`;
         
        DB.query(sql_query, [leave_Id],  
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(result);
                }
                result.values = _results;
                resolve(result);
        });
    });
}

const setAcceptLeave = (leave_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "update `leave` set status = 2 where `leave`.id= ? ;";
        
        DB.query(sql_query, [leave_Id],  
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(result);
                }
                result.values = _results;
                resolve(result);
        });
    });
}

const setRejectLeave = (leave_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "update `leave` set status = 3 where `leave`.id= ? ;";
        
        DB.query(sql_query, [leave_Id],  
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(result);
                }
                result.values = _results;
                resolve(result);
        });
    });
}

const submitLeave = (reqst, emp_Id)=>{

    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "insert into `leave` (emp_id, type_id, date, reason) values (?, ?, ?, ?)";

        DB.query(sql_query, [emp_Id, reqst.body.type, reqst.body.leave_date, reqst.body.reason],  
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(result);
                }
                result.values = _results;
                resolve(result);
        });  
    });
}

const reviewRequest = (leave_Id, stat)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select id from leaves_status where status = ?";
        
        DB.query(sql_query, [stat], 
            function (err, _results) {
                if (err) {
                    console.log(err);
                    result.status = false;
                    resolve(result);
                } else {
                    status_Id = _results[0].id;
                    sql_query = "update `leave` set status= ? where id = ?";

                    DB.query(sql_query, [status_Id, leave_Id],  
                        function (err, _results) {
                            if (err) {
                                result.status = false;
                                console.log(err);
                                resolve(result);
                            }
                            result.values = _results;
                            resolve(result);
                    });
                } 
        });  
    });
}

module.exports = {
    get_LeavesBySupId,
    get_leavesByEmpId,
    get_LeavesData,
    getSupervisor,
    get_leaves_status,
    setAcceptLeave,
    setRejectLeave,
    submitLeave,
    reviewRequest
}