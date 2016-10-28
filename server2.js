var http = require('http');
const express = require('express');
const PORT = process.env.PORT || 3000;
let app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({   // to support URL-encoded bodies
    extended: true
}));

const storehouse = {}; // db