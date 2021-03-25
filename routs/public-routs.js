const path = require('path');
const express = require('express');

// const productsController = require('../controllers/products');

const router = express.Router();

router.get("/home", (req, res, next)=>{
    res.render("index", {title: "Home", path: "/"});
});

router.get("/about", (req, res, next)=>{
    res.render("about", {title: "About", path: "/about"});
});

router.get("/chat-room", (req, res, next)=>{
    res.render("chat-room", {title: "Chat Room", path: "/chat-room"});
});

router.get("/me", (req, res, next)=>{
    res.render("me", {title: "Me", path: "/me"});
});

router.get("/", (req, res, next)=>{
    res.render("index", {title: "Home", path: "/"});
});

// router.get('/', productsController.getProducts);

module.exports = router;
