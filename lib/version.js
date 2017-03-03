var config = require('../configUlises.json');

function getMd5(){
	return 'AABBCC';
}

exports.getVersion = function getVersion(req, res){
	var path = __dirname;
	var files = config.Ulises.Files;
	
	var md5 = getMd5();
	files[0].md5 = md5;
	files[1].md5 = md5;
	
	res.json({files: files, version: '1.0'});
}

