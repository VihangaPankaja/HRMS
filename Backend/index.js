const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require('./database/db_helper');

const hrRoutes = require('./routes/hrRoutes');
const managerRoutes = require('./routes/managerRoutes');
const supervisorRoutes = require('./routes/supervisorRoutes');
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');
const {verify_token, has_paygrade}  = require("./middleware/authentication");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3001;

app.use('/hr', verify_token, has_paygrade(['level 4']), hrRoutes);
app.use('/manager', verify_token, managerRoutes);
app.use('/supervisor', verify_token, has_paygrade(['level 2']), supervisorRoutes);
app.use('/user', userRoutes);
app.use('/report', verify_token, has_paygrade(['level 3']), reportRoutes)
//restart1
app.listen(port, () => {
console.log(`Listening on port ${port}`)
});

app.get("/getleavetypes",(req,res)=>{
    var selectDetails=[];
    const sqlinsert = "SELECT ID, type FROM leavetype";
    db.query(sqlinsert,(err,result) => {
        if(err){
            console.log("table error", err);
        }else{
            selectDetails.push(result);
            res.send(selectDetails);
        }
    })
});


app.get("/getHRMSdetails",(req,res)=>{
    var selectDetails=[];
    const sqlinsert = "SELECT ID as id,Name as name FROM department where ID>1";
    db.query(sqlinsert,(err,result) => {
        if(err){
            console.log("table error", err);
        }else{
            selectDetails.push(result);
            const sqlinsert = "SELECT ID as id,status as name FROM marital_status";
            db.query(sqlinsert,(err,result) => {
                if(err){
                    console.log("table error", err);
                }else{
                    selectDetails.push(result);
                    const sqlinsert = "SELECT ID as id,type as name FROM employee_type  where ID>2";
                    db.query(sqlinsert,(err,result) => {
                        if(err){
                            console.log("table error", err);
                        }else{
                            selectDetails.push(result);
                            const sqlinsert = "SELECT ID as id,paygrade as name FROM paygrade";
                            db.query(sqlinsert,(err,result) => {
                                if(err){
                                    console.log("table error", err);
                                }else{
                                    selectDetails.push(result);
                                    const sqlinsert = "SELECT ID as id,status as name FROM employee_status";
                                    db.query(sqlinsert,(err,result) => {
                                        if(err){
                                            console.log("table error", err);
                                        }else{
                                            selectDetails.push(result);
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
});