const http = require('http');
let fs = require('fs');
const url = require("url");

let app_args = process.argv.slice(2);

if(app_args.length == 0) {
	require('./usage');
}

function sendPost(post_url, post_data) {
	let post_options = {
		host: url.parse(post_url).hostname,
		port: url.parse(post_url).port,
		path: url.parse(post_url).pathname,
		method: 'POST',
		headers: {
	        	'Content-Type': 'application/json',
	          	'Content-Length': Buffer.byteLength(post_data)
	      	}
	};
	let post_req = http.request(post_options, res => {
		res.setEncoding('utf8');
		res.on('data', function (chunk) { console.log('Response:\n' + chunk); }); 
	});

	// post the data
	post_req.write(post_data);
	post_req.end();
}


switch(app_args[0]) {
	case 'GET':
		if(app_args.length < 2) {
			console.log('Error: arguments is less than 2');
			require('./usage');
		}

		http.get(app_args[1], res => {
			console.log(`Status code: ${res.statusCode}`);
			res.pipe(process.stdout);
		});
		break;
	case 'POST':
		if(app_args.length < 3) {
			console.log('Error: arguments is less than 3');
			require('./usage');
		}

		fs.readFile(app_args[2], 'utf-8', function (err, data) {
			if (err) {
				console.log(`Can not read file ${app_args[2]}`);
				process.exit(1);
			}
			if(data) {
				sendPost(app_args[1], data);
  			}  else {
   				console.log("No data to post");
  				process.exit(1);
  			}
		});

		break;
	default:
		console.log('Error: incorrect command');
		require('./usage');
}


