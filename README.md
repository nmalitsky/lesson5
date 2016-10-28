USAGE:

1.  Start server: "node server.js"

2.  Send request from client:

(GET) node client GET "http://localhost:3000/registry?name=pos1&qty=10"  
(POST) node client POST "http://localhost:3000/registry" registry.json

 

registry.json:

{

	"name": "pos1",

	"qty": 10

}
