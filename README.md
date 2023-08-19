# ORM-HW


## Description

- The goal of this project
- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

- We are supposed to use insomnia to GET routes to return all categories, all products, and all tags being tested in Insomnia Core:


we needed to execute association methods on the Sequelize models to create the following relationships between them:

Product belongs to Category, as a category can have multiple products but a product can only belong to one category.
Category has many Product models.Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products. Tag belongs to many Product models.


  ## Table of contents

1. [ Description ](#Description)
2. [ link ](#Functionalitylink)
3. [ usage ](#Usage)
4. [ installation ](#Installation)
5. [ screenshot ](#Screenshot)
6. [ liscence ](#License)

## Functionalitylink

[[
](https://drive.google.com/file/d/1a6KC9OWHlKXrBzItJYp82NucdT9BgPUZ/view?usp=sharing)](https://drive.google.com/file/d/1a6KC9OWHlKXrBzItJYp82NucdT9BgPUZ/view?usp=sharing)

## Usage
 - imported required packages: npm, Express, mysql2, sequelize, dotenv
 - source schema and npm run seed to seed data
 - npm start

## Installation 
- node.js
- Sequelize
- dotenv
- mysql2
  

## Screenshot 

![0A9CF978-F064-470A-93C8-9F10A94E64FE](https://github.com/elixit/orm-hw/assets/63372291/69ff90b8-1ca0-4a61-a224-895cef31eaf1)



## License

[MIT](https://choosealicense.com/licenses/mit/)

