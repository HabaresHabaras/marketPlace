


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
                type: "list",
                name: "theme",
                message: "The Manager's office",
                choices: [
                    "View products for sale",
                    "View low inventory",
                    "Add to inventory",
                    "Add new product",

                    new inquirer.Separator(),
                ]
            }
        ])
        .then(answer => {
            switch (answer.theme) {
                case "View products for sale":
                    showProducts();
                    break;

                case "View low inventory":
                    lowInventory();
                    break;

                case "Add to inventory":
                    showInventory();
                    break;

                case "Add new product":
                    postProduct();
                    // showManagerView();
                    break;

            }
            // showWeapons();
        });
}

function showProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log(" ");
        for (var i = 0; i < res.length; i++) {
            console.log(" " + res[i].item_id + "   " + res[i].product_name + " | "
                + res[i].price + " G" + " | " + res[i].department_name
            );
            console.log("------------------------------------------------------------");
        }
    });
    selectChoice();
}


function postProduct() {
    inquirer.prompt([
        {
            name: "product",
            type: "input",
            message: "What is the name of the item you would like to add to the shop?"

        },
        {
            name: "department",
            type: "list",
            message: "In which department would you like your item to be?",
            choices: [
                "weapons",
                "shields",
                "goodies"]
        },
        {
            name: "stock",
            type: "input",
            message: "How many of these would you like to have in stock?",

        },
        {
            name: "price",
            type: "input",
            message: "For how much would you like to sell this product? ",
        },
        {
            name: "description",
            type: "input",
            message: "Add a brief description of your product: ",
        }
    ]).then(function (answer) {
        connection.query(
            "INSERT INTO products SET ?",
            {
                product_name: answer.product,
                department_name: answer.department,
                stock_quantity: answer.stock,
                price: answer.price,
                object_description: answer.description
            },
            function (err) {
                if (err) throw err;
                else if(!err){
                    console.log("Success in adding this product to the inventory!")
                }
            }

        );
        selectChoice();

    })

};


function lowInventory() {
    connection.query("SELECT * FROM products WHERE stock_quantity < ?", [5], function (err, res) {
        console.log(" ");
        console.log(" LOW IN STOCK: ");
        console.log(" ");
        for (var i = 0; i < res.length; i++) {
            console.log(" " + res[i].item_id + "   " + res[i].product_name + "  IN STOCK: " + res[i].stock_quantity
            );
            console.log("------------------------------------------------------------");
        }
    });
    selectChoice();
}

function showInventory() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log(" ");
        for (var i = 0; i < res.length; i++) {
            console.log(" " + res[i].item_id + "   " + res[i].product_name + " | "
                + "IN STOCK: " + res[i].stock_quantity
            );
            console.log("------------------------------------------------------------");
        }
    });
    addInventory();
}

function addInventory() {
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the id of the product you would like to restock?"

        },
        {
            name: "restock",
            type: "input",
            message: "How many of these would you like to have in stock?"

        }
    ])

        .then(answers => {
            connection.query("SELECT * FROM products", function (err, res) {
                var realNumber = parseInt(answers.id) - 1;
                var productId = answers.id;
                var restockAmmount = parseInt(answers.restock) + parseInt(res[realNumber].stock_quantity);

                connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [
                    restockAmmount,
                    productId
                ]
                )
            })
            selectChoice()
        });
}
// .then(answers => {
//             // console.log(answer.id);
//             var realNumber = parseInt(answers.id) - 1;
//             connection.query("SELECT * FROM products", function (err, res) {

//                 console.log("  ")
//                 console.log(" You have selected the " + res[realNumber].product_name + " for the cheap price of " + res[realNumber].price + " Golds");
//                 console.log("--------------------------------------------------------------------");
//                 console.log(" Description: ");
//                 console.log(res[realNumber].object_description);
//                 console.log(" ");

//                 // console.log(answers);
//                 if (answers.ammount <= res[realNumber].stock_quantity) {
//                     console.log(" Here is your purchase: ")
//                     console.log(answers.ammount + " " + res[realNumber].product_name)
//                 }
//                 console.log(" ");
//                 console.log(" ");
//                 selectChoice()
//             }
//             )