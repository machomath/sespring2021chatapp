const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const mongoDBUrl = require("./secrets/mongodb-url").mongoDBUrl;
const User = require("./models/user");

const publicRouts = require("./routs/public-routs");
/////////////////Requires above this line//////////////////////
app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
// app.set('views', 'views');//unnecessary since we do not want to change the folder name
app.use(express.urlencoded({extended: true})); //to reach POST parameters
////////////System Settings above this line ////////////////////

try {
    let user1 = new User(100,"John", "s1@gmail.com", "122334");
    user1.id = 200
    console.log(user1.id);
    user1.email = "abc"
    user1.id = -2000;
} catch (error) {
    console.log(error);
}
////////////some experimatal things above this line/////////////
app.use(publicRouts);
///////////Routs above this line////////////////////////////
mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result=>{
    // console.log(result);
    app.listen(3000, ()=>{
        console.log("Server running at port 3000");
    });
}).catch(error=>{
    console.log(error);
})
