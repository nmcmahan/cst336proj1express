const express = require("express");
var faker = require("faker");
const app = express();
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));


let visits=0;
var name1 = faker.name.findName();
var name2 = faker.name.findName();
var mail = faker.internet.email();

app.get("/", function(req, res) {
    visits++;
    res.render("index.html", {"visitnum":visits, "fake1":name1, "fake2":name2, "email":mail});
});

app.get("/cplusplus", function(req, res) {
    visits++;
    res.render("cplusplus.html", {"visitnum":visits, "fake1":name1, "fake2":name2, "email":mail});
});

app.get("/java", function(req, res) {
    visits++;
    res.render("java.html", {"visitnum":visits, "fake1":name1, "fake2":name2, "email":mail});
});

app.get("/objectoriented", function(req, res) {
    visits++;
    res.render("objectoriented.html", {"visitnum":visits, "fake1":name1, "fake2":name2, "email":mail});
});



app.listen(process.env.PORT, function(){
    console.log("Server is up and running");
});