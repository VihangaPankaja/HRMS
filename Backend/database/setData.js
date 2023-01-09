const DB = require('./DB_helper');

const updatePaygrade = (Data)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "update paygrade set salary=?, num_leaves=? where id = ?;";
        
        DB.query(sql_query, [Data.salary, Data.num_leaves, Data.ID],  
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

const add_job_title = (Data)=>{
    return new Promise((resolve, reject) => {
        result = {values: [], status: true}; 
        sql_query = "insert into emptype (type) value (?);";
        
        DB.query(sql_query, [Data.title],  
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
    updatePaygrade,
    add_job_title
}