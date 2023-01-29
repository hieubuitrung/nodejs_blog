const path = require('path');
// để thêm module express vào project
const express = require('express');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');

// tương đương với ./routes/index - nó sẽ tự nạp nếu file name là index
const route = require('./routes'); 

// khởi tạo một app mới sử dụng module express
const app = express();

// định nghĩa tên cổng để chạy ứng dụng Nodejs của bạn trên server
const port = 3000;

// cấu hình path cho những static file
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'));

// Tempalte engine
app.engine('hbs', engine({
    // config tên đuôi handlebars -> hbs
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
// do cấu trúc project không giống với thư viện nên cần thay đổi đường dẫn đến views
app.set('views', path.join(__dirname, 'resources/views'));

// Middleware xử lý dữ liệu từ form gửi lên server 
//(sử dụng khi dữ liêu gửi từ form html)
app.use(express.urlencoded({extended: true}));
// Middleware xử lý dữ liệu từ client gửi lên server qua thư viện (XLMHttpRequest, fetch, ajax) 
//(sử dụng khi dữ liệu gửi từ code js)
app.use(express.json());

// Routes init
route(app);

// 127.0.0.1 -> localhost
// Hàm listen() sẽ khởi động server.
app.listen(port, (req, res) => {
    return console.log(`Example app listening at http://localhost:${port}`);
})