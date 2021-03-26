const express = require("express");

const router = express.Router();

router.use("/about", (req, res, next)=>{
    res.render("about", {title: "About", page: "about"});
});

router.use("/chat-room", (req, res, next)=>{
    res.render("chat-room", {title: "Chat Room", page: "chat-room"});
});

router.use("/me", (req, res, next)=>{
    res.render("me", {title: "Me", page: "me"});
});

router.use("/", (req, res, next)=>{
    res.render("index", {title: "Home", page: "index"});
});

module.exports = router;