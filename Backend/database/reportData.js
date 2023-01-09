const DB = require('./DB_helper');

const getUserDataByDepartment = (dept) => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select 
                    ID, 
                    \`Employee Name\`, 
                    Email, 
                    \`Joined Date\`, 
                    \`Employee Type\`, 
                    \`Employee Status\`,
                     Paygrade 
                from employee_by_department 
                where Department = ? 
                order by ID;`;
          
        DB.query(sql_query, [dept],  
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

const getLeavesByDepartment = (Date_from, Date_to) => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select department, count(id) as total_leaves 
                from \`leaves_by_department\` 
                where ? <= leaves_by_department.Date and 
                    leaves_by_department.Date <= ? 
                group by department;`;
         
        DB.query(sql_query, [Date_from, Date_to],  
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

const getEmployeeCountByGrouping = (parm) => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select `?` , count(user_Id) as `Employee Count` from `employee_grouping` group by `?` ;";
          
        DB.query(sql_query, [parm, parm],
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

const getAverageSalaryByDepartment = () => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select * from `average_salary_by_department`;";
         
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

const getCurrentUserName = (Id) => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select firstname, lastname from employee where user_Id = ?;";
         
        DB.query(sql_query, [Id],  
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

const getEmployeesAndSupervisors = () => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select * 
                from \`employee_and_supervisor\` 
                order by \`employee_and_supervisor\`.\`Employee ID\`;`;
          
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

const getGroupEmployeesReportParameters = () => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select COLUMN_NAME 
                from information_schema.columns 
                where table_name = 'employee_grouping' and COLUMN_NAME != 'user_Id';`;
         
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

const getEmployeeAndSupervisorParameterList = () => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select COLUMN_NAME 
                from information_schema.columns 
                where table_name = 'employee_and_supervisor';`;
          
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

const getDepartmentList = () => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select Name from department;";
          
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

const getParameterList = () => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select COLUMN_NAME 
                from information_schema.columns 
                where table_name = 'employee_by_department' and COLUMN_NAME != 'department';`;
        
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

module.exports = {
    getUserDataByDepartment,
    getLeavesByDepartment,
    getEmployeeCountByGrouping,
    getAverageSalaryByDepartment,
    getCurrentUserName,
    getEmployeesAndSupervisors,
    getGroupEmployeesReportParameters,
    getEmployeeAndSupervisorParameterList,
    getDepartmentList,
    getParameterList
}