const http = require('http');

const data = (req,res)=>{
    const resData ={
        message:"Welcome to NodeJs World",
        name: "Send JSON response from NodeJs",
        category:"NodeJS"
    }
    const cont = JSON.stringify(resData)
    if(req.url === '/')
    {
        res.end("<h1>Hello World</h1>");
    }
    else if(req.url === '/jsondata')
    {
        res.end(cont);
    }
}
const server = http.createServer(data);

server.listen(3000,()=>{
    console.log('App is running');
})
