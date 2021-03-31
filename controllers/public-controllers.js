exports.publicGetController = (title, page)=>{
    return (req, res, next)=>{
        res.render(page, {title: title, page: page});
    }
}
