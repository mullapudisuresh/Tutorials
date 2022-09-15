var url = require('url');
var adr= 'https://www.w3schools.com/nodejs/nodejs_url.asp';
var q=url.parse(adr,true);
console.log(q.host);
console.log(q.search);
console.log(q.hostname);
console.log(q.pathname);
