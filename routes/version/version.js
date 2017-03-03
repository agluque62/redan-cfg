/**
 * Created by vjmolina on 2/3/17.
 */
var express = require('express');

var router = express.Router();

var bodyParser = require('body-parser');
var parseUrlEncoded = bodyParser.urlencoded({ extended: false });

router.route('/')	// The root path is relative the path where it's mounted in app.js (app.use('/historics', historics);)
	.get(function(req, res) {
		var a = 1;
		//logging.LoggingDate(req.method + ': ' + req.baseUrl + req.url);
		//myLibHistorics.getHistorics(function(h){
		//	res.json(h);
		//});
		res.a=a;
	})
	.post(function(req,res){
		var a = 2;
		//logging.LoggingDate(req.method + ': ' + req.baseUrl + req.url);
		//var Incidencia = req.body;
		//myLibHistorics.postHistorics(Incidencia,function(h){
		//	res.json(h);
		//});
		res.a=a;
	});