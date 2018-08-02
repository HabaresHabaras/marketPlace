var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",

    password: "root",
    database: "market_placeDB"
});

connection.connect(function(err){
    if(err) throw(err){
        console.log("connected as id " + connection.threadId);
       // querAllsongs();
        //PUT HERE THE APPROPIATE FUNCTIONS to retrieve data
       // queryDanceSongs();
    }
});