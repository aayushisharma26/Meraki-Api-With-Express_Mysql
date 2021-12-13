var mysql = require('mysql');
//const axios=require('axios')

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123@Navgurukul"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE meraki", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

//var mysql = require('mysql');
// const data=require("../saral_data.json");
// // console.log(data)

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123@Navgurukul",
//   database: "meraki"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE Meraki_Table (id Int, name VARCHAR(255), logo VARCHAR(255),notes VARCHAR(255),days_to_complete Int,short_description VARCHAR(255),type VARCHAR(255),course_type VARCHAR(255),lang_available VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// }); 

// var data=fs.readFileSync("saral_data.json","utf-8");
// var parse=JSON.parse(db);
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");})
// var Insert=[];
// // for (i in parse[i]){
  // data=parse[i]
// for (i = 0; i < data.length; i++){
//   Insert.push([parseInt (data[i].id) ,data[i].name ,data[i].logo,data[i].notes,data[i].days_to_complete, data[i].short_description, data[i].type , data[i].course_type, data[0].lang_available])
//   console.log(Insert)}
//   // ,data["logo"],data["notes"],data["days_to_complete"],data["short_description"],data["type"],data["course_type"],data["lang_available"]]}
//   var sql = "INSERT INTO Meraki_Table VALUES ?";
//   con.query(sql, [Insert], function (err, result) {
//   if (err) throw err;
//   console.log("Number of records inserted: ");
  
// });


//module.exports=con ;