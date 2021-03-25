const path = require("path");
const express = require("express");

const publicRouts = require("./routs/public-routs");

app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
// app.set('views', 'views');//unnecessary

app.use(publicRouts);

app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});