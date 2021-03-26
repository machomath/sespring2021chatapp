const path = require("path");
const express = require("express");
const User = require("./models/user");

const publicRouts = require("./routs/public-routs");
/////////////////Requires above this line//////////////////////
app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
// app.set('views', 'views');//unnecessary since we do not want to change the folder name
app.use(express.urlencoded({extended: true})); //to reach POST parameters
////////////System Settings above this line ////////////////////

app.use(publicRouts);
let user1 = new User(1,"John", "s1@gmail.com", "122334");

///////////Routs above this line////////////////////////////
app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});