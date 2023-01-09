const DB = require('./db_helper');
const enc = require('../middleware/encryptionHandler');

const registerUser = async (reqst)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        address_Id = "";
        user_Id = "";
        emergency_contact_Id = "";
        emp_Id = "";

        DB.beginTransaction( async (err) => {
            if (err) {
                result.status = false;
                console.error("database transaction failed", err);
                return;
            }

            sql_query = "insert into `user` (username,password) values (?,?)";
            const hashed_password = await enc.encryptCredential(reqst.body.password1);

            DB.query(sql_query, [reqst.body.username, hashed_password], (err, _result) => {
                if(err){
                    result.status = false;
                    console.log("user table error", err);
                    DB.rollback();
                    return;
                }
                user_Id = _result.insertId;
                sql_query = "insert into address (Line1,Line2,City,District,Postal_Code) values (?,?,?,?,?)";
            
                DB.query(sql_query, [reqst.body.Line1, reqst.body.Line2, reqst.body.City, reqst.body.District, reqst.body.Postal_Code], (err, _result) => {
                        if(err){
                            result.status = false;
                            console.log("address error", err);
                            DB.rollback();
                            return;
                        }
                        address_Id = _result.insertId;
                        sql_query = "insert into emergencycontact (Name,Phone_number,Relationship) values (?,?,?)";

                        DB.query(sql_query, [reqst.body.Name, reqst.body.phone_number, reqst.body.Relationship], (err, _result) => {
                            if(err){
                                result.status = false;
                                console.log("emergency contact failed", err);
                                DB.rollback();
                                return;
                            }
                            emergency_contact_Id = _result.insertId;

                            sql_query = `insert into employee 
                                                (firstname,
                                                lastname,
                                                birthday,
                                                email,
                                                salary,
                                                Joined_date,
                                                nic_number,
                                                leave_count,
                                                department,
                                                maritalStatus,
                                                address,type,
                                                paygrade,
                                                empStatus,
                                                user_Id,
                                                emergency_contact) 
                                            values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                            const leave_count = 0;
                        
                            DB.query(sql_query,
                                [
                                    reqst.body.firstname,
                                    reqst.body.lastname,
                                    reqst.body.birthday,
                                    reqst.body.email,
                                    reqst.body.salary,
                                    reqst.body.Joined_date,
                                    reqst.body.nic_number,
                                    leave_count,
                                    reqst.body.department,
                                    reqst.body.maritalStatus,
                                    address_Id,
                                    reqst.body.type,
                                    reqst.body.paygrade,
                                    reqst.body.empStatus,
                                    user_Id,
                                    emergency_contact_Id
                                ], (err, _result) => {
                                    if(err){
                                        result.status = false;
                                        console.log("employee error", err);
                                        DB.rollback();
                                        return;
                                    }
                                    emp_Id = _result.insertId;
                                    sql_query = "insert into phonenumber (emp_ID,phone_number) values (?,?)";

                                    DB.query(sql_query, [emp_Id, reqst.body.phonenumber1], (err, _result) => {
                                            if(err){
                                                result.status = false;
                                                console.log("phone number error", err);
                                                DB.rollback();
                                                return;
                                            }

                                            DB.query(sql_query, [emp_Id, reqst.body.phone_number2], (err, _result) => {
                                                if(err){
                                                    result.status = false;
                                                    console.log("phone number error", err);
                                                    DB.rollback();
                                                    return;
                                                }

                                                DB.commit(function (err) {
                                                    if (err) {
                                                        result.status = false;
                                                        console.error("commit error", err);
                                                        DB.rollback();
                                                        return;
                                                    }
                                                    console.log("user added!");                                                                                    
                                                });
                                            });
                                        }
                                    );                                                                                                                
                                }
                            );                                        
                                                        
                        });                
                    }
                );    
            });
        });
        resolve(result);
    });
}

const updateUser = (reqst)=>{
    result = {values: [], status: true}; 

    DB.beginTransaction( err => {
        if (err) {
            result.status = false;
            console.error("transaction failed", err);
            return;
        }
        sql_query = `update emergencycontact set Name = ?, Phone_number = ?, Relationship = ? where id = ?;`;

        DB.query(sql_query, [nareqst.body.nameme, reqst.body.phone_number, reqst.body.relationship, reqst.body.emgcontact_id], (err, _result) => {
                    if(err){
                        result.status=false;
                        console.log("emergencycontact update failed", err);
                        DB.rollback();
                        return;
                    }                                   
        });  
        
        sql_query = `update address set Line1 = ?, Line2 = ?, City = ?, District = ?, Postal_Code = ? where id = ?;`;

        DB.query(sql_query,
            [
                reqst.body.line1,
                reqst.body.line2,
                reqst.body.city,
                reqst.body.district,
                reqst.body.postal_code,
                reqst.body.address_id
            ],(err, _result) => {
                if(err){
                    result.status = false;
                    console.log("address update error", err);
                    DB.rollback();
                    return;
                }          
        });

        sql_query = `update employee 
                    set 
                        firstname = ?, 
                        lastname = ?, 
                        birthday = ?, 
                        email = ?, 
                        salary = ?, 
                        Joined_date = ?, 
                        nic_number = ?,  
                        department = ?, 
                        maritalStatus = ?, 
                        type = ?, 
                        paygrade = ?, 
                        empStatus = ?  
                    where id = ?`;

        DB.query(sql_query,
            [
                reqst.body.firstname,
                reqst.body.lastname,
                reqst.body.birthday,
                reqst.body.email,
                reqst.body.salary,
                reqst.body.Joined_date,
                reqst.body.nic_number,
                reqst.body.dept_id,
                reqst.body.marital_id,
                reqst.body.emptype_id,
                reqst.body.paygrade_id,
                reqst.body.empstatus_id,
                reqst.body.empId
            ],(err, _result) => {
                if(err){
                    result.status = false;
                    console.log("employee update error", err);
                    DB.rollback();
                    return;
                }
        }); 

        sql_query = "update phonenumber set phone_number = ? where id = ?";

        DB.query(sql_query, [reqst.body.phone1, reqst.body.phone1_id], (err, _result) => {
                if(err){
                    result.status = false;
                    console.log("phone number update error",err);
                    DB.rollback();
                    return;
                }
        });  

        DB.query(sql_query, [reqst.body.phone2, reqst.body.phone2_id], (err, _result) => {
                if(err){
                    result.status = false;
                    console.log("phone number update error", err);
                    DB.rollback();
                    return;
                }
        });

        DB.commit(function (err) {
            if (err) {
                result.status = false;
                console.error("commit error", err);
                DB.rollback();
                return;
            }
            console.log("updation success!");                                                                                    
        });

    });

    return result;
}

const getUserByUsername = (userName)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true};  
        sql_query = `select 
                        \`user\`.id, 
                        \`user\`.username, 
                        \`user\`.password, 
                        emptype.type, 
                        paygrade.paygrade 
                    from 
                        \`user\` join 
                        employee join 
                        emptype join 
                        paygrade on \`user\`.id = employee.user_id and
                            employee.paygrade = paygrade.id and 
                            employee.type = emptype.id 
                    where  username = ?;`;
        
        DB.query(sql_query, [userName], 
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(res);
                }
                result.values = _results;
                resolve(result);
        });
    });
}

const getPhoneNoByEmpId = (emp_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "select id, phone_number from phonenumber where emp_id = ?";
         
        DB.query(sql_query, [emp_Id] , 
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(res);
                }
                result.values = _results;
                resolve(result);
        });
    });
}

const getSupervisorList = (userName)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true};  
        sql_query = "select * from `supervisor`;";

        DB.query(sql_query, [userName],  
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

const getEmployeeList = ()=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true};
        sql_query = `select 
                        \`user\`.id, 
                        employee.id empId,
                        employee.firstname,
                        employee.lastname,
                        employee.birthday,
                        employee.email,
                        employee.salary,
                        employee.Joined_date,
                        employee.nic_number,
                        employee.photo,
                        employee.leave_count,
                        department.name dept_name,
                        maritalstatus.status,
                        address.line1,
                        address.line2,
                        address.city,
                        address.district,
                        address.postal_code,
                        emptype.type,
                        paygrade.paygrade,
                        empstatus.status,
                        emergencycontact.name,
                        emergencycontact.phone_number,
                        emergencycontact.relationship 
                    from 
                        \`user\` join 
                        employee join 
                        department join 
                        maritalstatus join 
                        address join 
                        emptype join 
                        paygrade join 
                        empstatus join 
                        emergencycontact on 
                            \`user\`.id = employee.user_id and 
                            department.id = employee.department and 
                            maritalstatus.id = employee.maritalStatus and 
                            address.id = employee.address and 
                            emptype.id = employee.type AND 
                            paygrade.id = employee.paygrade and 
                            empstatus.id = employee.empStatus and 
                            emergencycontact.id = employee.emergency_contact;`;
        
        DB.query(sql_query, 
            function (error, results) {
                if (error) {
                    console.log(error);
                    res.status = false;
                    resolve(res);
                }
                res.values = results;
                resolve(res);
            });
    });
}

const getEmployee = (user_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = `select 
                    \`user\`.id,
                    employee.id empId,
                    employee.firstname,
                    employee.lastname,
                    employee.birthday,
                    employee.email,
                    employee.salary,
                    employee.Joined_date,
                    employee.nic_number,
                    employee.photo,
                    employee.leave_count,
                    department.name dept_name,
                    department.id dept_id,
                    maritalstatus.status mar_status,
                    maritalstatus.id marital_id,
                    address.id address_id,
                    address.line1,
                    address.line2,
                    address.city,
                    address.district,
                    address.postal_code,
                    emptype.type,
                    emptype.id emptype_id,
                    paygrade.paygrade,
                    paygrade.id paygrade_id,
                    empstatus.status,
                    empstatus.id empstatus_id,
                    emergencycontact.id emgcontact_id,
                    emergencycontact.name,
                    emergencycontact.phone_number,
                    emergencycontact.relationship 
                from 
                    \`user\` join 
                    employee join 
                    department join 
                    maritalstatus join 
                    address join 
                    emptype join 
                    paygrade join 
                    empstatus join 
                    emergencycontact on 
                        \`user\`.id = employee.user_id and 
                        department.id = employee.department and 
                        maritalstatus.id = employee.maritalStatus and 
                        address.id = employee.address and 
                        emptype.id = employee.type and 
                        paygrade.id = employee.paygrade and 
                        empstatus.id = employee.empStatus and 
                        emergencycontact.id = employee.emergency_contact  
                where \`user\`.id = ?;`;
         
        DB.query(sql_query, [parseInt(user_Id)], function (err, _results) {
            if (err) {
                result.status = false;
                console.log(err);
                resolve(result);
            }
            _results[0].birthday = _results[0].birthday.toISOString().slice(0, 10);
            _results[0].Joined_date = _results[0].Joined_date.toISOString().slice(0, 10);

            res.values = _results;
            resolve(result);
        });
    });
}

const getSupervisor= (emp_Id)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "SELECT * FROM `supervisor` JOIN employee ON supervisor.Sup_Id = employee.ID WHERE supervisor.Emp_Id = ?;";
        
        DB.query(sql_query, [emp_Id],  
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(res);
                }
                result.values = _results;
                resolve(result);
        });
    });

}

const isSupervisor = (emp_Id) => {
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query ="select count(*) from supervisor where supervisor.sup_id = ?;";
         
        DB.query(sql_query, [emp_Id], 
            function (err, _results) {
                if (err) {
                    result.status = false;
                    console.log(err);
                    resolve(result);
                }
                if (_results.values[0] > 0){
                    result.value = true
                }
                resolve(result);
        });
    });
}

module.exports = {
    registerUser,
    updateUser,
    getUserByUsername,
    getPhoneNoByEmpId,
    getSupervisorList,
    getEmployeeList,
    getEmployee,
    getSupervisor,
    isSupervisor
}