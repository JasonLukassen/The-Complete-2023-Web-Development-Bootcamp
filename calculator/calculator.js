const express  = require("express");;
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send(`The result of the calculation is ${result}`);
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let result = weight / (Math.pow((height / 100), 2));
    res.send(`Your BMI is ${result}`);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});