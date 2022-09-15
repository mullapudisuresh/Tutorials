var http = require('http')
var fs = require('fs')
http.createServer((req,res)=>{
    fs.writeFile('test.txt','hello!!!',(err,data)=>{
        res.write(data);
        res.end();

    })
    
}).listen(8080)