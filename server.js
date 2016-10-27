const http = require('http');
const url = require("url");
const PORT = process.env.PORT || 3000;

const storehouse = {}; // db
let id = 1; // aka autoincrement field

function doOperation(operation, data) {
	var res = "";
	switch(operation) {
		case 'registry':
			storehouse[id] = { id: id, name: data.name, qty: data.qty }; // not check for repeat registry for object { name: data.name, qty: data.qty }
			res = storehouse[id];
			id++; // autoincrement field
			break;
		case 'addition':
			if(storehouse[data.id]) {
				storehouse[data.id].qty = Number(storehouse[data.id].qty) + Number(data.qty);
				res = storehouse[data.id];
			} else {
				res = `position with id=${data.id} not found for addition`;
			}
			break;
		case 'delete':
			if(storehouse[data.id]) {
				storehouse[data.id].qty = Math.max(0, Number(storehouse[data.id].qty) - Number(data.qty));
				res = storehouse[data.id];
			} else {
				res = `position with id=${data.id} not found for delete`;
			}
			break;
		case 'balance':
			let arr = [];
			for(let i=1; i <= id; i++) { // not use for in
				if(storehouse[i]) arr.push(storehouse[i]);
			}
			return arr;
			break;
		default:
			res =`${operation} is unknown operation`;
	}
	return res;
}


function handler(req, res) {
	let data = '';
	req.on('data', chunk => data += chunk);
	req.on('end', () => {
		let operation = url.parse(req.url).pathname.replace('/','');
		let req_data = (req.method == 'POST') ? JSON.parse(data) : url.parse(req.url).query;
		let res_data = JSON.stringify(doOperation(operation, req_data), null, 2);

		res.writeHead(200, 'OK', {'Content-Type': 'application/json'});
                res.write(res_data);
		res.end();
	});
}

const server = http.createServer();
server.on('error', err => console.error(err));
server.on('request', handler);
server.on('listening', () => {
	console.log('Start HTTP on port %d', PORT);
});
server.listen(PORT);