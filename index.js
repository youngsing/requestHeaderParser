var express = require('express');
var app = express();

app.get('*', function (req, res) {
	var result = {};
	
	var sys = req.headers['user-agent'];
	sys = sys.match(/\((.+?)\)/)[1];
	result['software'] = sys;
	
	var lng = req.headers['accept-language'];
	lng = lng.split(';')[0].split(",")[0];
	result['language'] = lng;
	
	var ip = req.headers['x-forwarded-for'];
	result['ipaddress'] = ip;
	
	res.json(result);
});

app.listen(8080, function () {
	console.log("Listening on port 8080!");
});
