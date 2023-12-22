const mysql = require("mysql2");
const inquirer = require("inquirer");
const cfonts = require('cfonts');

connection.connect((err) => {
    if (err) throw err;

    //Creating function for employees
    function viewEmployees() {
        
        connection.query(query, (err, res) => {
            if (err) throw err;
            console.table(res);
            // restart the application
            start();
        });
    }