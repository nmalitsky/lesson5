var http = require('http');
const express = require('express');
const PORT = process.env.PORT || 3000;
let app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({   // to support URL-encoded bodies
    extended: true
}));

const storehouse = {}; // dblet id = 1; // aka autoincrement fieldapp.use('/registry', (req, res) => {	let name = req.method == "POST" ? req.body.name : req.query.name;	let qty = req.method == "POST" ? parseInt(req.body.qty) : parseInt(req.query.qty);	if (!name || !qty) return res.send({status: 'error - incomplete inputs'});	storehouse[id] = { id: id, name: name, qty: qty }; // allow dublicate items in warehouse - it's not specify in technical task	res.json(storehouse[id]);	id++; // autoincrement field});app.use('/addition', (req, res) => {	let id = req.method == "POST" ? parseInt(req.body.id) : parseInt(req.query.id);	let qty = req.method == "POST" ? parseInt(req.body.qty) : parseInt(req.query.qty);	if (!id || !qty) return res.send({status: 'error - incomplete inputs'});	if(storehouse[id]) {		storehouse[id].qty = Number(storehouse[data.id].qty) + Number(data.qty);		res.json(storehouse[id]);	} else {		res.send({status: `position with id=${id} not found for addition`});	}});app.use('/delete', (req, res) => {	let id = req.method == "POST" ? parseInt(req.body.id) : parseInt(req.query.id);	let qty = req.method == "POST" ? parseInt(req.body.qty) : parseInt(req.query.qty);	if (!id || !qty) return res.send({status: 'error - incomplete inputs'});	if(storehouse[id]) {		storehouse[id].qty = Math.max(Number(storehouse[id].qty) + Number(qty));		res.json(storehouse[id]);	} else {		res.send({status: `position with id=${id} not found for addition`});	}});app.use('/balance', (req, res) => {	let arr = [];	for(let i=1; i <= id; i++) { // not use for in		if(storehouse[i]) arr.push(storehouse[i]);	}	res.json(arr);});app.set('port', PORT);http.createServer(app).listen(app.get('port'), function () {    console.log('Server listening on port ' + app.get('port'));});