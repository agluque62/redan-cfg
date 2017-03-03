
var config = require('../configUlises.json');

exports.getVersion = function getVersion(req, res){
	var path = __dirname;
	var files = config.Ulises.Files;
	res.json({version: '1.0'});
}