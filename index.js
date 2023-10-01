// import global package known as http 
const http =require('http')
const app =require("./src/config/express.config")
//mounting express to node server
//creat the server pointed by http as:
const server =http.createServer(app);
//      (request,response)=>{
//      response.end("hello world Mad")
// }); // parameters inside createserver() is complete server application
                                // our server application is express application,graphql,sockets
// server is not run yettikai we have to listen to it so we pass it to listen specific port as
server.listen('3005','localhost',(err)=>{  // 1 parameter is mandatory but we can pass upto 3 paramaeter in listen()
                                   // here localhost=domain name provided for ipv4=127.0.0.1 anf v6=::1 ip
if(!err){
     console.log("server is running on port 3005");
     console.log("press CTRL+C to disconnect your server");
     console.log("use http://localhost:3005/ to browse your server");

}    
 }) // here these lines of code setup the server now we write for server side application

 // here to run express it is not necessary to use node server or http
 // express can also provide the http server features i.e it can work as server/nodeServer
 
 

