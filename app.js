const path = require("path");
const express = require("express");

app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
// app.set('views', 'views');//unnecessary

app.get("/home", (req, res, next)=>{
    res.render("index", {title: "Home"});
});

app.get("/about", (req, res, next)=>{
    res.render("about", {title: "About"});
});

app.get("/chat-room", (req, res, next)=>{
    res.render("chat-room", {title: "Chat Room"});
});

app.get("/me", (req, res, next)=>{
    res.render("me", {title: "Me"});
});

app.get("/", (req, res, next)=>{
    res.render("index", {title: "Home"});
});

app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});