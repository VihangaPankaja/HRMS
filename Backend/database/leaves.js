const DB = require('./DB_helper');

const getLeavesBySupId = (sup_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select 
                    \`leave\`.id, 
                    \`leave\`.emp_ID, 
                    leavestatus.status, 
                    \`leave\`.Date, 
                    \`leave\`.reason, 
                    leavetype.type 
                from \`leave\` join 
                    leavetype join 
                    leavestatus on \`leave\`.type_ID = leavetype.ID and \`leave\`.status = leavestatus.ID 
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

const getLeavesByEmpId = (emp_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select 
                    \`employee\`.firstname, 
                    \`employee\`.lastname, 
                    \`leavestatus\`.status, 
                    \`leave\`.id, leavetype.type, 
                    \`leave\`.Date, 
                    \`leave\`.reason 
                from 
                    \`employee\` join 
                    \`leavestatus\` join 
                    \`leave\` join leavetype on 
                        \`leave\`.status = \`leavestatus\`.\`ID\` and 
                        \`employee\`.id = \`leave\`.\`emp_ID\` and
                        \`leave\`.type_ID = leavetype.ID 
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

const getLeavesData = (leave_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select 
                    \`employee\`.firstname, 
                    \`employee\`.lastname, 
                    \`leavestatus\`.status, 
                    \`leave\`.id, leavetype.type, 
                    \`leave\`.Date, 
                    \`leave\`.reason 
                from 
                    \`employee\` join 
                    \`leavestatus\` join 
                    \`leave\` join leavetype on 
                        \`leave\`.status = \`leavestatus\`.\`ID\` and 
                        \`employee\`.id = \`leave\`.\`emp_ID\` and 
                        \`leave\`.type_ID = leavetype.ID 
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

const getLeaveStatus = (leave_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select leavestatus.status 
                from \`leave\` join leavestatus on \`leave\`.status = leavestatus.id 
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
        sql_query = "select id from leavestatus where status = ?";
        
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
    getLeavesBySupId,
    getLeavesByEmpId,
    getLeavesData,
    getSupervisor,
    getLeaveStatus,
    setAcceptLeave,
    setRejectLeave,
    submitLeave,
    reviewRequest
}