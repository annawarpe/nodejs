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
    console.log("connocted");
});
