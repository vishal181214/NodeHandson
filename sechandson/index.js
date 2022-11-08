const express = require('express');
const server = express();

const data = {
        message:"Welcome to Express Module",
        name: "Express Nodule",
        category:"NodeJS"
}
const info = JSON.stringify(data);
server.get('/api/main',(req,res)=>{
    res.write('<h1>Hello World</h1>')
    res.write(info);
    res.end();
})

server.listen(5000,()=>{
    console.log("App is running");
})
