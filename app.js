const { static } = require("express");
const express = require("express");
const path = require("path");

app = express();

app.set("view engine", "ejs");
// app.set("views", "my-views"); //just incse you want to change the default location for ejs views
console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/about", (req, res, next)=>{
    res.render("about", {title: "About", page: "about"});
});

app.use("/chat-room", (req, res, next)=>{
    res.render("chat-room", {title: "Chat Room", page: "chat-room"});
});

app.use("/me", (req, res, next)=>{
    res.render("me", {title: "Me", page: "me"});
});

app.use("/", (req, res, next)=>{
    res.render("index", {title: "Home", page: "index"});
});


app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});