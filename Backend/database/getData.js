const DB = require('./db_helper');

const getAllPaygrades = ()=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select * from paygrade;";
         
        DB.query(sql_query, 
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

const getJobTitles = ()=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select * from emptype;";
        
        DB.query(sql_query,
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

const getDepartmentById = (dept_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true};  
        sql_query = "select * from department where id = ?;";
        
        DB.query(sql_query, [dept_Id], 
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

const getemployee_statusById = (status_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select * from empstatus where id = ?;";
        
        DB.query(sql_query, [status_Id], 
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

const getemployee_typeById = (type_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select * from emptype where id = ?;";
          
        DB.query(sql_query, [type_Id], 
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

const getmarital_statusById = (status_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select * from maritalstatus where id = ?;";
        
        DB.query(sql_query, [status_Id], 
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

const getPayGradeById = (grade_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select * from paygrade where id = ?;";
        
        DB.query(sql_query, [grade_Id], 
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

const getEmployeeId = (user_id) => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select ID from employee where user_id = ?;";
         
        DB.query(sql_query, [user_id], 
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

const getUserIDByEmpId = (emp_id) => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select user_Id from employee where ID = ?;";
        
        DB.query(sql_query, [emp_id], 
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

const getAvailableLeaveCount = (emp_id) => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select available_leaves(?);";
        
        DB.query(sql_query, [emp_id], 
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


module.exports = {
    getAllPaygrades,
    getJobTitles,
    getDepartmentById,
    getemployee_statusById,
    getemployee_typeById,
    getmarital_statusById,
    getPayGradeById,
    getEmployeeId,
    getUserIDByEmpId,
    getAvailableLeaveCount
}

