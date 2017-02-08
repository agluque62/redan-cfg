var express = require('express');
var router = express.Router();

var config = require('../configUlises.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{
  	LoginTimeout: config.Ulises.LoginTimeOut,
  	Region: config.Ulises.Region,
  	BackupServiceDomain: config.Ulises.BackupServiceDomain,
	Version: config.Ulises.Version});

 });

module.exports = router;
