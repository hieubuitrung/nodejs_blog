// nơi chứa những file không có tài nguyên cụ thể, không có trang con

const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search)

// path "/" phải cho cuối vì nó sẽ xét từ trên xuống nếu trùng với path nào thì sẽ lọt vào nó luôn
router.use('/', siteController.index)

// export router
module.exports = router;