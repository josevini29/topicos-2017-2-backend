var express = require('express');
var todos = express.Router();

//Definições das rotas
var todoIndex = 4;
var todosList = [
    {
        "title": "Disciplina de Tópicos",
        "description": "Vamos aprender Node e React",
        "id": 0,
        "completed": false
    },
    {
        "title": "Disciplina de Tópicos",
        "description": "Vamos aprender Node e React",
        "id": 1,
        "completed": false
    },
    {
        "title": "Disciplina de Tópicos",
        "description": "Vamos aprender Node e React",
        "id": 2,
        "completed": false
    },
    {
        "title": "Disciplina de Tópicos",
        "description": "Vamos aprender Node e React",
        "id": 3,
        "completed": false
    }
];

/* GET home page. */
todos.get('/', function (req, res, next) {
  console.log('Recebemos uma requisicão GET');
  res.status(200).json(todosList);
});

todos.get('/:todoId', function (req, res, next) {
  console.log('Recebemos uma requisicão GET');

  var todo = findTodoById(req.params.todoId);

  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).send();
  }
});

todos.post('/', function (req, res, next) {
  console.log('Recebemos uma requisicão POST');

  var todo = req.body;
  todo.id = todoIndex++;
  todo.completed = false;
  todosList.push(todo);

  res.status(201).send();
});

todos.put('/:todoId', function (req, res, next) {
  var todo = findTodoById(req.params.todoId);

  if (todo) {
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.completed = req.body.completed;
    res.status(200).json(todo);
  } else {
    res.status(404).send();
  }

});

todos.delete('/:todoId', function (req, res, next) {

  var index = todosList.findIndex(function (todo, index) {
    return todo.id === parseInt(req.params.todoId);
  });

  if (index >= 0) {
    todosList.splice(index, 1);
    res.status(200).send();
  } else {
    res.status(404).send();
  }

});

function findTodoById(todoId) {
  var todosFiltered = todosList.filter(function (todo, index) {
    return todo.id === parseInt(todoId);
  });
  if (todosFiltered.length > 0)
    return todosFiltered[0];
  return null;
}


module.exports = todos;

