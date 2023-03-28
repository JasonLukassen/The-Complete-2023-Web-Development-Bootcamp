const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https  = require("https");
const { dirname } = require("path");

const app =  express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/" ,function(req, res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);


    const url = "https://us17.api.mailchimp.com/3.0/lists/37c15f35a6";
    const options = {
        method: "POST",
        auth: "wong:443338404832b36c81c303e5ab4f3ebf-us17"
    }
    
    const request = https.request(url, options, function(responce){
        if (responce.statusCode === 200){
            res.sendFile(__dirname + "/succes.html")
        } else{
            res.sendFile(__dirname + "/failure.html")
        }
        responce.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});



app.listen(3000, function(){
    console.log("The server is running on port 3000");
})

// key id
// 443338404832b36c81c303e5ab4f3ebf-us17

// list id
// 37c15f35a6