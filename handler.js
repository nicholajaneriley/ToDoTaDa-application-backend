const express = require("express");
const cors = require("cors");
const serverlessHttp = require("serverless-http");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express ();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "toDoTaDa"
});


//GET
app.get("/todotada", function (request, response) {

  connection.query("SELECT * FROM Task", function (err, data) {
    if (err) {
      response.status(500).json({
        error: err
      });
    } else {
      response.status(200).json({
        task: data
      });
    }
  });
});


// POST
app.post("/todotada", function(request, response) {

 const addedTask = request.body;

 response.status(200).json({
   message: `Successfully added task with name: ${addedTask.task}, date: ${addedTask.date}, userID: ${addedTask.userID}`
 });
});



// PUT

app.put("/todotada/:id", function(request, response) {
 const updatedTask = request.body;
 const id = request.params.id;

 response.status(200).json({
   message: `Successfully updated task ID ${id} with name: ${updatedTask.task}, date: ${updatedTask.date}, emotion: ${updatedTask.emotion} userID: ${updatedTask.userID}`
 });
});

// DELETE

app.delete("/todotada/:id", function(request, response) {

 const id = request.params.id;
 const deletedTask = request.delete;

 response.status(200).json({
   message: `Successfully deleted to do task ${id}`
 });
});


module.exports.app = serverlessHttp(app);