var http = require('http');
const express = require('express');
const PORT = process.env.PORT || 3000;
let app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({   // to support URL-encoded bodies
    extended: true
}));

const storehouse = {}; // dblet id = 1; // aka autoincrement fieldapp.post('/registry', (req, res) => {	let name = req.body.name;	let qty = parseInt(req.body.qty);	if (!name || !qty) return res.send({status: 'error input data'});	storehouse[id] = { id: id, name: name, qty: qty }; // not check for repeat registry for object { name: data.name, qty: data.qty }	res.json(storehouse[id]);	id++; // autoincrement field});app.post('/addition', (req, res) => {	let id = parseInt(req.body.id);	let qty = parseInt(req.body.qty);	if (!id || !qty) return res.send({status: 'error input data'});	if(storehouse[id]) {		storehouse[id].qty = Number(storehouse[data.id].qty) + Number(data.qty);		res.json(storehouse[id]);	} else {		res.send({status: `position with id=${id} not found for addition`});	}});app.post('/delete', (req, res) => {	let id = parseInt(req.body.id);	let qty = parseInt(req.body.qty);	if (!id || !qty) return res.send({status: 'error input data'});	if(storehouse[id]) {		storehouse[id].qty = Math.max(Number(storehouse[id].qty) + Number(qty));		res.json(storehouse[id]);	} else {		res.send({status: `position with id=${id} not found for addition`});	}});app.post('/balance', (req, res) => {	let arr = [];	for(let i=1; i <= id; i++) { // not use for in		if(storehouse[i]) arr.push(storehouse[i]);	}	res.json(arr);});app.set('port', PORT);http.createServer(app).listen(app.get('port'), function () {    console.log('Server listening on port ' + app.get('port'));});