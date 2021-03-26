exports.publicGetController = (title, path)=>{
    return (req, res, next)=>{
        res.render(path, {title: title, path: path});
    };
}

