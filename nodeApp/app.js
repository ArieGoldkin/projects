var express = require("express");
var bodyParser = require("body-parser");
var Users =  require("./models/mongo");
var Promise = require("bluebird");
var app = express();
var router = express.Router();

app.use(express.static(__dirname + '/tent'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : true}));

router.get("/", function(req, res){
    res.sendFile("index.html");
});

router.route("/users")
    .get(function(req,res){
        var response = {};
        Users.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    })
    .post(function(req, res){
        var db = new Users();
        var response = {};
        db.firstName = req.body.firstName;
        db.lastName = req.body.lastName;
        db.phone = req.body.phone;
        db.email = req.body.email;
        db.moreInfo = req.body.moreInfo;
        db.receiveUpdates = req.body.receiveUpdates;
        db.save(function(err){
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"}; //parse/ format
            }
            res.json(response);
        });
    });

router.route("/users/:id")
    .get(function(req, res){
        var response = {};
        Users.findById(req.params.id, function(err, data){
            if(err) {
                response = {"error" : true, "message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    })

    .put(function(req, res){
        var response = {};
        Users.findById(req.params.id, function(err, data){
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                if(req.body.firstName !== undefined) {
                    data.firstName = req.body.firstName;
                }
                if(req.body.lastName !== undefined) {
                    data.lastName = req.body.lastName;
                }
                if(req.body.phone !== undefined) {
                    data.phone = req.body.phone;
                }
                if(req.body.email !== undefined) {
                    data.email = req.body.email;
                }
                if(req.body.moreInfo !== undefined) {
                    data.moreInfo = req.body.moreInfo;
                }
                if(req.body.receiveUpdates !== undefined) {
                    data.receiveUpdates = req.body.receiveUpdates;
                }
                data.save(function(err){
                    if(err) {
                        response = {"error" : true,"message" : "Error updating data"};
                    } else {
                        response = {"error" : false,"message" : "Data is updated for "+req.params.id};
                    }
                    res.json(response);
                })
            }
        });
    })
app.use('/',router);

app.listen(3000, function(){
    console.log("server is connected!!");
});