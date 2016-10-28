**Version 1.**

Use only “http” module, without express.

Support GET and POST method

 

USAGE:

1.  Start server: "node server.js"

2.  Send request from client:

(GET) node client GET "http://localhost:3000/registry?name=pos1&qty=10"  
(POST) node client POST "http://localhost:3000/registry" registry.json

 

registry.json:

{

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
"name": "pos1",

"qty": 10
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

}

 

**Version 2.**

Use express module.

Support POST and GET (not POST) method

 

USAGE:

1.  Start server: "node server2.js"

2.  Send request from client2:

(GET) node client2 GET "http://localhost:3000/registry?name=pos1&qty=10"  
(POST) node client2 POST "http://localhost:3000/registry" registry.json

 
