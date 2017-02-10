'use strict';

var express = require('express');
var router = express.Router();
module.exports = router;
var todos = require('../models/todos');
var bodyParser = require('body-parser');

router.use(bodyParser.json())

router.get('/users',function(req,res,next){
	res.send(todos.listPeople());
});

router.get('/users/:name/tasks', function(req,res,next){
	var results = todos.list(req.params.name, req.query.status);
	if (results) {
		res.send(results);
	} else {
		res.status(404).send(results);
	}
});

router.post('/users/:name/tasks', function(req,res,next){
	var name = req.params.name;
	var results = todos.add(name, req.body);
	if (results) {
		res.status(201).send(results);
	} else {
		res.status(400).send(results);
	}
});

router.put('/users/:name/tasks/:index', function(req,res,next){
		res.send(todos.complete(req.params.name, req.params.index));

router.delete('/users/:name/tasks/:index', function(req,res, next){
	res.status(204).send(todos.remove(req.params.name, req.params.index));
	});
});


