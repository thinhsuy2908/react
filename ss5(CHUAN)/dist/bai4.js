// Khai báo hai biến
let strNum = "2";
let num = 2;
// So sánh lỏng (==)
console.log(strNum == num); // true
// So sánh chặt (===)
console.log(strNum === num); // false
// Giải thích:
// Toán tử == (so sánh lỏng) sẽ chuyển đổi kiểu dữ liệu trước khi so sánh, nên "2" == 2 là true.
// Toán tử === (so sánh chặt) sẽ so sánh cả giá trị và kiểu dữ liệu, nên "2" (string) !== 2 (number), kết
