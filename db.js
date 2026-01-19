const mysql2 = require("mysql2");
const connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"uMuHoZa@123hope",
    database:"students_db"
});
connection.connect((err)=>{
    if(err){
        console.err("dabase connection failed",err);
         return;
    }
   console.log("connected to database"); 
});
module.exports=connection;
