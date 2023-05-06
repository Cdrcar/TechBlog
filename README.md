# TechBlog
CMS-style blog following the MVC paradigm in its architectural structure

## [Table of Contents](#table-of-contents)

- [Description](#description)
- [Final Result](#final-result)
- [Deployment](#deployment)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Contact Me](#contact)

## [Description](#table-of-contents)

This TechBlog website allows users to publish blog posts and comment other user's posts as well. It follows he MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

`Technologies used:`

- JavaScript
- CSS
- Node.js
- Express.js
- MySQL2
- Sequelize
- Handlebars
- Heroku

## [Final Result](#table-of-contents)

![]()
![]()

## [Deployment](#deployment)

[Link to Heroku]()

## [Installation](#table-of-contents)

Install the following packages and dependencies:

> Node.js

> MySQL

> Insomia or any other API development enviroment

Once you have Node.js and MySQL installed, you'll need to install the required dependencies for this app: Express.js sequelize, MySQL2

> package.json: npm i

## [Usage](#table-of-contents)

Add your MySQL username, password, and database name as environment variables. 

> DB_NAME='techblog'  
> DB_USER='your_username'  
> DB_PW='your_password'

Open MySQL shell and insert the commands: 

> source db/schema.sql
> use techblog

Exit MySQL shell and 
Start the app by running the following command in your terminal: 

> npm run seed
> node server.js

## [License](#table-of-contents)

Licenced under:

[MIT](https://choosealicense.com/licenses/MIT)

![badge](https://img.shields.io/badge/license-MIT-green>)

## [Tests](#table-of-contents)

To test this app, clone the repository, open the file in your source-code editor, complete the installation and usage running the code `node server.js`. This will start the server and sync the Sequelize models to the MySQL database. You can then use your API development environment (for example Insomnia) to test the API routes using different HTTP request methods like get, post, put and delete.

## [Contact Me](#table-of-contents)

- [GitHub](https://github.com/cdrcar)

- [Email: carmela881@outlook.com](mailto:carmela881@outlook.com)
