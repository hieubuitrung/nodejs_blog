const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show)

// path "/" phải cho cuối vì nó sẽ xét từ trên xuống nếu trùng với path nào thì sẽ lọt vào nó luôn
// bỏ '/' cũng được
router.use('/', newsController.index) 

// export router
module.exports = router;