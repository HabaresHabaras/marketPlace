DROP DATABASE IF EXISTS market_placeDB;
CREATE database market_placeDB;
USE market_placeDB;


CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
    object_description VARCHAR(200) NOT NULL,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("Woden sword", "weapons", 50, 10, "A simple sword for a beginner, easy to break.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("Metal sword", "weapons", 200, 10, "A better sword, it can damage an enemy but it is heavy and not very sharp.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("Rare metal sword", "weapons", 400, 10, "The rare metal makes it lighter, and therefore faster. Damage more in less time.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("Double Blade", "weapons", 1000, 10, "Sharp, light and fast. This blade, if handled properly, can land a great deal of damage on an enemy.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("Viridium Axe", "weapons", 1500, 10, "A huge axe, made of Viridium.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("Green Jade Dragon Sword", "weapons", 1475, 5, "Made out of a green dragon scale, it cures the injuries of whoever holds it and attracts good luck and gold.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("Fire Dragon Sword", "weapons", 1475, 5, "Flamming hot to the touch, this blade was carved out of a red dragon scale. Beware of its power or be corrupted by it.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("Sea Dragon Sword", "weapons", 1475, 5, "A blade so fast, it glides through the air at supersonic speeds. Land several hits in one turn, and be able to fly.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("Hero's Wand", "weapons", 4000, 1, "In case you want to do Magic. A 4000 year old wand of unknown origins and unlimited powers.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("Fire Sword", "weapons", 4000, 1, "Forged in a dragon's breath, perhaps the sharpest sword ever created, old magic runes are written on its blade.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("Mega Hammer", "weapons", 4000, 1, "Very destructive, handle with care.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description)
VALUES ("The Machine", "weapons", 7000, 1, "Point at your enemies, press the red button on the top and deal more damage than any sword. How it works? Too complicated to explain.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description) 
VALUES ("Woden Shield", "shields", 500, 10, "Cover yourself against the weakest enemies. A shield for a noob.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description) 
VALUES ("Monster Hunter Shield", "shields", 2000, 10, "A shield for the monster hunter, to survive attacks from the creatures of the Night.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description) 
VALUES ("Dragon tamer shield", "shields", 3000, 5, "Not even the breath of a dragon can breach through this shield. Equip for some serious defense against magic, fire and physical attacks.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description) 
VALUES ("Shield of the Ancient Hero", "shields", 7000, 1, "A very misterious object that belonged to a warrior from the ancient times. Some say it glows from time to time, perhaps it's magical.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description) 
VALUES ("Potion", "goodies", 30, 250, "Cures superficial injuries.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description) 
VALUES ("Large potion", "goodies", 70, 250, "Cures most injuries.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description) 
VALUES ("Poison Dart", "goodies", 50, 250, "Throw at an enemy, to slightly damage and poison it.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description) 
VALUES ("Strength Potion", "goodies", 300, 100, "You'll feel like a titan for a short period of time. Drink this before a specially hard battle.");

INSERT INTO products (product_name, department_name, price, stock_quantity, object_description) 
VALUES ("Defense Potion", "goodies", 300, 100, "Your skin will be thick as metal for a short period of time. Drink it and worry not about your enemy's attacks.");
