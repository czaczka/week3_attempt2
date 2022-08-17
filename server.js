var express = require('express'); // used for routing
var app = express();

var bodyParser = require('body-parser');

app.use (bodyParser.json());
var http = require('http').Server(app); // used to provide http functionailty 

app.use(express.static(__dirname + '/www'));

let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("server running");
    console.log("host: " + host + " port: " + port);
});
// route for form
app.get('/', function(req,res){
    res.sendFile(__dirname + '/www/form.html');
});


app.post('/api/login',function(req,res){
    let users = [{'email':'asd@gmail.com','pwd':'123'},{'email':'qwe@gmail.com','pwd':'123'},{'email':'zxc@gmail.com','pwd':'123'}]

    if (!req.body) {
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    customer.valid = false;
    for (let i=0;i<users.length;i++){
        if (req.body.email == users[i].email && req.body.upwd == users[i].pwd) {
            customer.valid = true;
            
        }
    }
    res.send(customer);
});