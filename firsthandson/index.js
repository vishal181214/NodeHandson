const http = require('http');
const server = http.createServer((req,res)=>{
    res.write("<h1>Hello World</h1>")
    res.write('{"Hello":"World","ProgLang":"Node","Desi":"Developer"}');
    res.end();
})

server.listen(3000,()=>{
    console.log('App is running');
})