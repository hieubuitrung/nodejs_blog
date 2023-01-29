
class SiteController {
    
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

// khởi tạo đối tượng sau đó export
module.exports = new SiteController;