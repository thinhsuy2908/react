const a = 5;
const arr = [1, 2, 3];

a = 10; // Thử thay đổi giá trị biến số nguyên
arr.push(4); // Thêm phần tử mới vào mảng

console.log('a:', a);
console.log('arr:', arr);

// Giải thích:
// - Việc gán lại giá trị cho biến a sẽ gây lỗi TypeError vì const không cho phép thay đổi giá trị tham chiếu của biến.
// - Việc thêm phần tử vào mảng arr không bị lỗi vì const chỉ ngăn không cho gán lại biến arr, 
//   nhưng vẫn cho phép thay đổi nội dung bên trong mảng (mảng là