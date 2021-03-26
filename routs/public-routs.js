// const path = require('path');
const express = require('express');

const publicController = require('../controllers/public-controller');
const publicGetController = publicController.publicGetController;
const publicPostController = publicController.publicPostController;

const router = express.Router(); 

router.post("/signup", publicPostController());

router.get("/home", publicGetController("Home", ""));

router.get("/about", publicGetController("About", "about"));

router.get("/chat-room", publicGetController("Chat Room", "chat-room"));

router.get("/me", publicGetController("Me", "me"));

router.get("/", publicGetController("Home", ""));

module.exports = router;
