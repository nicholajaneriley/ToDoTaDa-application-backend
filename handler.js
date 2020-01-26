const express = require("express");
const cors = require("cors");
const serverlessHttp = require("serverless-http");
const bodyParser = require("body-parser");

const app = express ();
app.use(cors());
app.use(bodyParser.json());


app.get("/todotada", function (request, response) {

  response.status(200).json({
    task: [
      {taskID: 1, completed: true, date: "2020-01-09", task: "Make cake", emotion: "happy", userID: 1},
      {taskID: 2, completed: true, date: "2020-01-10", task: "Learn JavaScript", emotion: "happy", userID: 2},
      {taskID: 3, completed: false, date: "2020-01-19", task: "Learn Serverless", userID: 1},
      {taskID: 4, completed: false, date: "2020-01-29", task: "Install Postman", userID: 3},
    ]
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