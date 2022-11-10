const express = require('express');
// const { nextTick } = require('process');
const app = express();

const middlewareOne = (req,res,next)=>{
    console.log("Middleware One");
    next();
}

const middlewareTwo = (req,res,next)=>{
    console.log("middleware two");
    next();
}

app.use(middlewareTwo);

app.get('/linkOne',middlewareOne,(req,res)=>{
    res.send("<h1>linkOne using middleware one and two</h1>")
    res.end();
})

app.get('/linkTwo',(req,res)=>{
    res.send("<h1>linkTwo using middleware two</h1>")
    res.end();
})

app.get('/linkThree',(req,res)=>{
    res.send("<h1>linkThree using middleware two</h1>")
    res.end();
})

app.get('/linkFour',(req,res)=>{
    res.send("<h1>linkFour using middleware one and two</h1>")
    res.end();
})

app.listen(3000);