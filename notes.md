//Notes

//Steps:

-create repo
-clone repo
-cd into folder
-npm init -y 
-npx gitignore node OR npm i -g gitignore and then gitignore node
-git add .
-git commit -m "commit message"
-git push -u origin master


//Routers and why they are important:

React applications are broken up into components; express APIs are broken up into Express Routers. 


//Client Server Architecture

[client] <network (JSON)> [api] <> [data sources]

//Request/Response Cycle

1. Client makes a request to server. 
2. Server produces a response and sends it to the client.

//Middleware 

-can see the request and do something with the information from the request
-can stop the request and produce a response
-can do nothing 
-can do the same (all the above) with the response object
-***can modify the request or response objects***

Three types:
-built-in: no need to npm/yarn install
-third party: need to npm/yarn install
-custom: we build it ourselves

Can be used:
-globally with server.use()
-locally at a request handler
