const path = require("path");
const express = require("express");

app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
// app.set('views', 'views');//unnecessary

app.get("/home", (req, res, next)=>{
    res.render("index", {title: "Home", path: "/"});
});

app.get("/about", (req, res, next)=>{
    res.render("about", {title: "About", path: "/about"});
});

app.get("/chat-room", (req, res, next)=>{
    res.render("chat-room", {title: "Chat Room", path: "/chat-room"});
});

app.get("/me", (req, res, next)=>{
    res.render("me", {title: "Me", path: "/me"});
});

app.get("/", (req, res, next)=>{
    res.render("index", {title: "Home", path: "/"});
});

app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});