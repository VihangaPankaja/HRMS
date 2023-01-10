const con = require('../database/db_helper');
const auth = require('../middleware/auth');
const enc = require('../middleware/encryptionHandler');

const theAdminLogin = async (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    let sql1 = `SELECT * FROM Employee left outer join employ_type on Employee.type = employ_type.ID left outer join User on Employee.user_Id = User.ID WHERE employ_type.type = 'Admin' and user.username = ${con.escape(username)} LIMIT 1`

    console.log(sql1);

    con.query(sql1, async function (err, result) {

        if (err){
            console.log(err);
            return res.status(400).json({
                message: err.sqlMessage
            });
        }
        else{
            if(result.length < 1){
                console.log("no user");
                return res.status(400).json({
                    message: "Incorrect username or password"
                });
            } else{
                const user = result[0];

                const hashed_password = user.password;
                const auth_password = await enc.checkEncryptedCredential(password, hashed_password);
                
                if(auth_password){
                    const accessToken = await auth.createToken(result[0]);
                    return res.status(201).json({
                        token: accessToken,
                        user: user
                    });
                }
                else{
                    console.log("password error");
                    return res.status(400).json({
                        message: "Incorrect username or password"
                    });
                }

            }
        }
    });
}

const addHRManagerDetails = async (req, res) => {

    let data = req.body;
    console.log("*************************", data);
    let username = data.username;

    if(data.password1 !== data.password2){
        console.log("Passwords do not match");
        return res.status(400).json({
            message: "Passwords do not match"
        });
    }
    let hashed_password = await enc.encryptCredential(data.password1);
    // console.log("!!!!!!!!!!!!!!!!!!!!!!");
    let sql1    = `SELECT count(employee.ID) as count FROM employee left outer join user on employee.user_Id = user.ID WHERE email = ${con.escape(data.email)} or employee.nic_number = ${con.escape(data.nic_number)} or user.username = ${con.escape(username)}`;
    con.query(sql1, (err, result) => {
        if(err){
            console.log(err);
            return res.status(400).json({
                message: err.sqlMessage
            });
        }
        else if(result[0].count > 0){
            return res.status(400).json({
                message: "Email, username or NIC already exists!"
            });
        }
        let address_sql = 'insert into Address (Line1, Line2, Town, District, Postal_Code) values (?);';
        let address_values = [
            data.Line1,
            data.Line2,
            data.Town,
            data.District,
            data.Postal_Code
        ];

        let user_sql = 'insert into User (username, password) values (?);';
        let user_values = [username, hashed_password];

        let emerg_sql = 'insert into emerg_contact (name, phone_number, Relationship) values (?)'
        let emerge_values = [
            data.Name,
            data.phone_number,
            data.Relationship
        ]

        let sql2 = address_sql + user_sql + emerg_sql;
        let values = [address_values, user_values, emerge_values];

        con.query(sql2, values, (err, result) => {
            if(err){
                console.log(err);
                return res.status(400).json({
                    message: err.sqlMessage
                });
            }
            else{

                let address_id = result[0].insertId;
                let user_id = result[1].insertId;
                let emerge_id = result[2].insertId;

                let emp_sql = 'insert into Employee (firstname, lastname, birthday, email, salary, Joined_date, nic_number, department, Marital_status, address, type, pay_grade, emp_status, user_id, emergency_contact) values (?)';
                let emp_values = [
                    data.firstname, 
                    data.lastname, 
                    data.birthday, 
                    data.email, 
                    data.salary, 
                    data.Joined_date, 
                    data.nic_number, 
                    data.department, 
                    data.Marital_status, 
                    address_id, 
                    2, 
                    4, 
                    data.emp_status, 
                    user_id, 
                    emerge_id
                ];
                // console.log("************************");
                con.query(emp_sql, [emp_values], (err, result) => {

                    if(err){
                        console.log(err);
                        return res.status(400).json({
                            message: err.sqlMessage
                        });
                    }
                    else{

                        let emp_id = result.insertId;

                        let phone_sql = 'insert into phon_num (emp_ID, phone_number) values ?';
                        let phone_values = [];

                        phone_values.push([emp_id, req.body.phon_num1]);
                        phone_values.push([emp_id, req.body.phon_num2]);

                        // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

                        con.query(phone_sql, [phone_values], (err, result) => {
                            if(err){
                                console.log(err);
                                return res.status(400).json({
                                    message: err.sqlMessage
                                });
                            }
                            else{
                                console.log(result);
                                return res.status(200).json({
                                    result: result,
                                    message: "HR added successfully"
                                });
                            }
                        })
                    }
                })
            }
        })
    })
}

const getHRMInfo = async (req,res) => {

    const emp_sql = `select * from employee where type = 2`;
    
    con.query(emp_sql, (err, emp_result) => {

        if(err){
            console.log(err);
            res.json({
                status: 'error',
                error: err.sqlMessage
            });
        }
        else if(emp_result.length > 0){
            console.log("ok")
            res.json({
                status: 'ok',
                result: emp_result
            });
        }
        else{
            console.log("no hrm")
            res.json({
                status: 'empty',
            });
        }
    })
}

const getHRMDetails = async (req,res) => {
    var selectDetails=[];
    const sqlinsert = "SELECT ID as id,Name as name FROM department where ID>1";
    con.query(sqlinsert,(err,result) => {
        if(err){
            console.log("table error", err);
        }else{
            selectDetails.push(result);
            const sqlinsert = "SELECT ID as id,status as name FROM Marital_status";
            con.query(sqlinsert,(err,result) => {
                if(err){
                    console.log("table error", err);
                }else{
                    selectDetails.push(result);
                    const sqlinsert = "SELECT ID as id,type as name FROM employ_type  where ID>2";
                    con.query(sqlinsert,(err,result) => {
                        if(err){
                            console.log("table error", err);
                        }else{
                            selectDetails.push(result);
                            const sqlinsert = "SELECT ID as id,pay_grade as name FROM pay_grade";
                            con.query(sqlinsert,(err,result) => {
                                if(err){
                                    console.log("table error", err);
                                }else{
                                    selectDetails.push(result);
                                    const sqlinsert = "SELECT ID as id,status as name FROM emp_status";
                                    con.query(sqlinsert,(err,result) => {
                                        if(err){
                                            console.log("table error", err);
                                        }else{
                                            selectDetails.push(result);
                                            console.log("all data here",selectDetails)
                                            res.send(selectDetails);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

const deleteHR = async (req,res) =>{

}

module.exports = {
    theAdminLogin,
    addHRManagerDetails,
    getHRMInfo,
    getHRMDetails,
    deleteHR
}