const path = require('path');
// gọi biến express trong node_moludes
const express = require('express');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
// gọi hàm 
const app = express();

// cổng port 3000
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


// cấu hình router 
// http://localhost:3000/hello
// req: request chứa thông số client truyền lên
// res: response chứa thông số truyền về
// send: trả về
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

// 127.0.0.1 -> localhost

app.listen(port, (req, res) => {
    return console.log(`Example app listening at http://localhost:${port}`);
})