//require package mongoose vào dự án
const mongoose = require('mongoose');
//kết nối với server của mongodb
/**
 * Trong đó:
 * mongodb://localhost:27017: địa chỉ kết nối của mongodb
 * test: là tên của database, bạn có thể đổi tên database này nếu muốn
 */
mongoose.set('strictQuery',false);
mongoose.connect("mongodb://localhost:27017/admin",{useNewUrlParser: true});
// định nghĩa các giá trị của một collection
const Schema = mongoose.Schema;
const userSchema = new Schema({
  //muốn định nghĩa bao nhiêu giá trị cho collection cũng được nhé với cú pháp:
  // tên cột : tên kiểu giá trị
  username: String,
  password: String,
});
//như các bạn có thể thấy mình định nghĩa 2 cột giá trị là username kiểu giá trị là String,
//kiểu giá trị là String

//định nghĩa một collection cụ thể
const UserModel = mongoose.model('account', userSchema);
UserModel.create({
    //cú pháp: tên cột đã định nghĩa trong Schema và giá trị của cột đó
    username: 'tuananh',
    password: '1',
  }).then((res) => {
    console.log(res);
  });
/*
    Trong đó:
        'user': tên collection chúng ta đặt
        UserModel: là biến đại diện cho collect, chúng ta dùng biến này
                    để tương tác database như thêm, sửa, xóa, hiển thị,...
*/