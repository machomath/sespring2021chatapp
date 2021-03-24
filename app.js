const { static } = require("express");
const express = require("express");
const path = require("path");

app = express();

app.set("view engine", "ejs");
// app.set("views", "my-views"); //just incse you want to change the default location for ejs views
console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/about", (req, res, next)=>{
    res.render("about", {title: "Chat About"});
});

app.use("/", (req, res, next)=>{
    res.render("index", {title: "Chat Home"});
});


app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});