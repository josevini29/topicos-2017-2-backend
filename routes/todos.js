var express = require('express');
var todos = express.Router();

//Definições das rotas
var todoIndex = 0;
var todosList = [];

/* GET home page. */
todos.get('/', function (req, res, next) {
  console.log('Recebemos uma requisicão GET');
  res.status(200).json(todosList);
});

todos.get('/:todoId', function (req, res, next) {
  console.log('Recebemos uma requisicão GET');

  var todosFiltered = todosList.filter(function (todo, index) {
    return todo.id === parseInt(req.params.todoId);
  });

  if (todosFiltered.length === 0) {
    res.status(404).send();
  } else {
    res.status(200).json(todosFiltered[0]);
  }
});

todos.post('/', function (req, res, next) {
  console.log('Recebemos uma requisicão POST');

  var todo = req.body;
  todo.id = todoIndex++;
  todosList.push(todo);

  res.status(200).send();
});


module.exports = todos;

