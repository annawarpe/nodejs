var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"annasaheb",
    database:"college",
    port:"3306"
});
con.connect(function(err){
    if(err)throw err;
    con.query("SELECT*FROM student1",function(err,result,field){
        if(err)throw err;
        console.log("result");
    });
});
