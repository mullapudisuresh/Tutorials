var http=require('http');
var fs = require('fs');
http.createServer((req,res)=>{
   fs.appendFile('test.txt','thank u',(err,data)=>{
    res.write(data);
    res.end();
    console.log('server running!')
   })
}).listen(3001)