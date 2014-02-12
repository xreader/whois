var spawn = require('child_process').spawn;

exports.whois = function (ip, callback) {
	var prc = spawn('whois',  [ip]);
	var whoisObj = {};
	//noinspection JSUnresolvedFunction
	prc.stdout.setEncoding('utf8');
	prc.stdout.on('data', function (data) {
		var str = data.toString()
		var lines = str.split(/(\r?\n)/g);
		console.log("whois:received data:" + lines.length);
		for (var i in lines){
			var line = lines[i];
			console.log("data:" + line);
			console.log("whois:processing line:" + (line && line.trim()) + ' '  + (line.indexOf('%') != 0) + '' +  (line.indexOf('#') != 0));
			if (line && line.trim() && line.indexOf('%') != 0 && line.indexOf('#') != 0){
				var dataValuePair =  line.split(":");
				if (dataValuePair.length == 2) {
				    if (whoisObj[dataValuePair[0].trim()] instanceof Array) {
    						whoisObj[dataValuePair[0].trim()].push(dataValuePair[1].trim());
                    } else { 
    				    if (whoisObj[dataValuePair[0].trim()]) { 
    				        //if there is serveral values with same name ogranizing them as array
    				        var tmp = whoisObj[dataValuePair[0].trim()];
        					whoisObj[dataValuePair[0].trim()] = [];
        					whoisObj[dataValuePair[0].trim()].push(tmp);
        					whoisObj[dataValuePair[0].trim()].push(dataValuePair[1].trim());
    				    }	
        				else 
    						whoisObj[dataValuePair[0].trim()] = dataValuePair[1].trim();
                    }
				}
			}
			
		}
		//console.log(lines.join(""));
	});

	prc.on('close', function (code) {
		console.log('process exit code ' + code);
		console.log('whois ' + JSON.stringify(whoisObj, null, 4));
		callback(null, whoisObj);
	});
};

