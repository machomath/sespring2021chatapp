const { static } = require("express");
const express = require("express");
const path = require("path");

const publicRouts = require("./routs/public-routs");

app = express();
 
app.set("view engine", "ejs");
// app.set("views", "my-views"); //just incse you want to change the default location for ejs views
console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

app.use(publicRouts);

app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});