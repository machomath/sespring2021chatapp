const express = require("express");
const publicController = require("../controllers/public-controllers");
const publicGetController = publicController.publicGetController;
const router = express.Router();

router.use("/about", publicGetController("About", "about"));

router.use("/chat-room", publicGetController("Chat Room", "chat-room"));

router.use("/me", publicGetController("Me", "me"));

router.use("/", publicGetController("Home", "index"));

module.exports = router;