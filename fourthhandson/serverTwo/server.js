const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
const cors = require('cors')
// const { users } = require("./data")
const users = [];


const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

const port = process.env.port||8080;

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/home',(req,res) => {
    res.json({
        name:"bill",
        age: 19
    })
    // res.send("SucessFull Tested")
})

app.post('/register', jsonParser, async (req, res) => {
    try {
        let foundUser = users.find((data) => req.body.email === data.email);
        if(!foundUser)
        {
            const salt = await bcrypt.genSalt();
            console.log(salt);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            console.log(hashedPassword);
            const jwtExpirySeconds = 10000;
            console.log(req.body);
            const user = { 
                name: req.body.name, 
                email: req.body.email, 
                cell: req.body.cell, 
                password: hashedPassword, 
                salt: salt 
            };
            users.push(user);
            console.log(users);
            console.log(jwtExpirySeconds*1000);
            res.status(200).send("<h5>User Registered Sucessfully</h5>")
            res.cookie("token", hashedPassword, { maxAge: jwtExpirySeconds * 1000 })
        }
        else {
            res.send("<div><h2>EmailId already in used</h2></div>");
        }
    }
    catch {
        console.log('Something went wrong');
        res.status(500).send('<h3>Something went wrong</h3>');
    }
})

app.post('/login', jsonParser, async (req, res) => {
    try {
        const user = users.find((data) => data.email === req.body.email);
    if (user) {
        let subPass = req.body.password;
        let storedPass = user.password;
        if (await bcrypt.compare(subPass,storedPass )) {
            res.status(200).send('<h5>LogIn Sucessfull</h5>')
        }
        else {
            res.send('<h2>Invalid email or password</h2>')
        }
    }
    else {
        res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
    }
        
    }
    catch {
        res.status(500).send("Internal Server Error");
    }
})

app.listen(port);