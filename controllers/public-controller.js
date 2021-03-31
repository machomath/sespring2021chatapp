const User = require("../models/user-schema");

exports.publicGetController = (title, path)=>{
    return (req, res, next)=>{
        res.render(path, {title: title, path: path});
    };
}

exports.publicPostController = (path)=>{
    switch (path) {
        case "signup":
            return (req, res, next)=>{
                // console.log(req.body);
                const user = new User(req.body);
                user.save().then(()=>{
                    console.log("New User Added");
                }).catch(error =>{
                    console.log(error);
                });
                res.redirect("/me");
            }
            break;
    
        default:
            return (req, res, next)=>{
                console.log(req.body);
                res.redirect("/me");
            }
            break;
    }
}