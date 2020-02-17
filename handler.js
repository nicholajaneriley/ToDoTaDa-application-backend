const express = require("express");
const cors = require("cors");
const serverlessHttp = require("serverless-http");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "toDoTaDa"
});


//GET working
app.get("/todotada", function (request, response) {

  connection.query("SELECT * FROM Task", function (err, data) {
    if (err) {
      response.status(500).json({
        error: err
      });
    } else {
      const mapped = data.map(task => {
        task.completed = task.completed === 1 ? true : false;
        return task;
      });
      response.status(200).json({
        task: data
      });
    }
  });
});


// POST
app.post("/todotada", function (request, response) {
  const newTask = request.body;
  connection.query("INSERT INTO Task SET ?", [newTask], function (err, data) {
    if (err) {
      response.status(500).json({
        error: err
      });
    } else {
      newTask.id = data.insertId;
      response.status(201).json(newTask);
    }
  });
});

//PUT
app.put("/todotada/:id", function (request, response) {
  const updatedTask = request.body;
  const id = request.params.id;

  connection.query(`UPDATE Task SET ? WHERE id=?`, [updatedTask, id],
    function (err) {
      if (err) {
        response.status(500).json({ error: err });
      } else {
        response.sendStatus(200);
      }
    }
  );
});


// DELETE
app.delete("/todotada/:id", function (request, response) {
  const id = request.params.id;
  connection.query("DELETE FROM Task WHERE id=?", [id], function (err) {
    if (err) {
      response.status(500).json({
        error: err
      });
    } else {
      response.sendStatus(200);
    }
  });
});



module.exports.app = serverlessHttp(app);