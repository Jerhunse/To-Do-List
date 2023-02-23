const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const items = ["buy food", "cook food", "eat food"];
const workItem = [];
const day = date.getDay();
const fullDay = date.getDate();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {

 
    res.render("list", { listTitle: fullDay + " To-Do", newItem: items });
})

app.get("/work", function (req, res) {
    res.render("list", { listTitle: day +" Work List", newItem: workItem });
})



app.post("/", function (req, res) {

  
    let item = req.body.newItem;

    if (req.body.list === "Work") {

        workItem.push(item);
        res.redirect("/work");

    } else {
        items.push(item);
        res.redirect("/");
    }
});



app.listen(3000, function () {
    console.log("running on server 3000")
});