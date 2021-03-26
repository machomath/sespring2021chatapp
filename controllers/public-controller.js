exports.publicGetController = (title, path)=>{
    return (req, res, next)=>{
        res.render(path, {title: title, path: path});
    };
}

exports.publicPostController = ()=>{
    return (req, res, next)=>{
        console.log(req.body);
        res.redirect("/me");
    }
}