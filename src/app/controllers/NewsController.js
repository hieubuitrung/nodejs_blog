

class NewsController {
    // cấu hình router 
    // http://localhost:3000/hello
    // req: request chứa thông số client truyền lên
    // res: response chứa thông số truyền về
    // send: trả về

    // [GET] /news
    index(req, res) {
        res.render('news')
    }

    // [GET] /news/:slug
    show(req, res) {
        var a = (req.params.slug);
        res.send(`NEWS DETAIL!!! ${a}`);
    }
}

// khởi tạo đối tượng sau đó export
module.exports = new NewsController;