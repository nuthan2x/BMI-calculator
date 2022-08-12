const express = require('express');
const bodyparser = require('body-parser');

const app = express();
    app.use(bodyparser.urlencoded({extended: true}));

    app.post("/",function(req,res){

        var w = Number(req.body.weight);
        var h = Number(req.body.height);



        res.send("<h1><center>your BMI is " + (w/h**2).toFixed(2) + "</h1></center>");
    });
    

    app.get("/",function(req,res){
        res.sendFile(__dirname + "/bmical.html")
    });

    app.listen(process.env.PORT || 3000,function(){
    console.log("server started.");
});


