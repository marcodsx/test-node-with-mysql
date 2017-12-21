var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "marcods2017"
});

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/


sql = "SHOW DATABASES;";
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    console.log(result);
  });
});


