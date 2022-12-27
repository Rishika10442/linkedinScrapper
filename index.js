const express = require('express');
const app = express();
const port = 8081;
const path= require('path');
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const cors = require('cors');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static(__dirname + '/asset'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',require('./routes/index'));

app.use(cors({
    origin: 'http://localhost:3000/'
}));

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });


const start = async() =>{
    try {
        app.listen(port,function(){
            console.log(`Server running at port: ${port}`);
        });

    } catch (error) {
        console.log(error);
    }
}
start();
