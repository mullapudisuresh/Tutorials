var http = require('http')
var fs = require('fs')
http.createServer((req,res)=>{
    fs.unlink('hi.txt',(err)=>{
        if(err) throw err
        console.log('deleted');
    })
    
}).listen(8080)