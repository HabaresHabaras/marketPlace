var mysql = require("mysql");
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",

    password: "root",
    database: "market_placedb"
});
connection.connect(function (err) {
    if (err) throw (err);
    console.log("connected as id " + connection.threadId);
    //    queryObjects();
    //PUT HERE THE APPROPIATE FUNCTIONS to retrieve data
    selectChoice();
})

// SELECT WHAT YOU WANT
function selectChoice() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'theme',
                message: 'Hello Traveler. What do you want to buy?',
                choices: [
                    "Weapons",
                    "Shields",
                    "Goodies",
                    new inquirer.Separator()
                ]
            }
        ])
        .then(answer => {
            switch (answer.theme) {
                case "Weapons":
                    showWeapons();
                    break;

                case "Shields":
                    showShields();
                    break;

                case "Goodies":
                    showGoodies();
                    break;
            }
            // showWeapons();
        });
}


// EXAMPLE OF INQUIRER TO BASE CODE ON
//     inquirer
//       .prompt({
//         name: "artist",
//         type: "input",
//         message: "What artist would you like to search for?"
//       })
//       .then(function(answer) {
//         var query = "SELECT position, song, year FROM top5000 WHERE ?";
//         connection.query(query, { artist: answer.artist }, function(err, res) {
//           for (var i = 0; i < res.length; i++) {
//             console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
//           }
//           selectObject();
//         });
//       });
//   }
function showWeapons() {
    connection.query("SELECT * FROM products WHERE department_name = ?", ["weapons"], function (err, res) {
        console.log(" ");
        for (var i = 0; i < res.length; i++) {
            console.log(" " + res[i].item_id + "   " + res[i].product_name + " | "
                + res[i].price + " G" + " | " + res[i].department_name
            );
            console.log("------------------------------------------------------------");
        }
    });
    askWhichObject();
}


function showShields() {
    connection.query("SELECT * FROM products WHERE department_name = ?", ["shields"], function (err, res) {
        console.log(" ");
        for (var i = 0; i < res.length; i++) {
            console.log(" " + res[i].item_id + "   " + res[i].product_name + " | "
                + res[i].price + " G" + " | " + res[i].department_name
            );
            console.log("------------------------------------------------------------");
        }
    });
    askWhichObject();
}


function showGoodies() {
    connection.query("SELECT * FROM products WHERE department_name = ?", ["goodies"], function (err, res) {
        console.log(" ");
        for (var i = 0; i < res.length; i++) {
            console.log(" " + res[i].item_id + "   " + res[i].product_name + " | "
                + res[i].price + " G" + " | " + res[i].department_name
            );
            console.log("------------------------------------------------------------");
        }
    });
    askWhichObject();
}

function askWhichObject() {
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "What's the number of the product you'd like to buy?"
            },
            {
                name: "ammount",
                type: "input",
                message: "How many of these would you like to buy?"
            }
        ])

        .then(answers => {
            // console.log(answer.id);
            var realNumber = parseInt(answers.id) - 1;
            connection.query("SELECT * FROM products", function (err, res) {

                console.log("  ")
                console.log(" You have selected the " + res[realNumber].product_name + " for the cheap price of " + res[realNumber].price + " Golds");
                console.log("--------------------------------------------------------------------");
                console.log(" Description: ");
                console.log(res[realNumber].object_description);
                console.log(" ");

                // console.log(answers);
                if (answers.ammount <= res[realNumber].stock_quantity) {
                    console.log(" Here is your purchase: ")
                    console.log(answers.ammount + " " + res[realNumber].product_name)
                }
                console.log(" ");
                console.log(" ");
                selectChoice()
            }
            )

        });
};

