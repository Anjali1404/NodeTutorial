# Node Project Tutorial 


### Steps

1. Create Folder
2. npm init
3. Create index.js (Entry point)


## Create server using http Module

``` 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World\n');
});

server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});

```


## Using express server

**Steps**
1. npm i express
2. import express module
3. create a express app 
4. listen on port

```
const express = require('express');
const port = 3000;
const app = express();

app.get("/", (req, res, next) => {
   res.json({
      "name": "Anjali"
   })
})

app.listen(port, () => {
   console.log(`Server running ${port}`);
})

```