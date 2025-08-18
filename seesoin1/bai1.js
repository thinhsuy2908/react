for (let i = 0; i <= 5; i++) {
    console.log(i);
}

console.log(i); // Thử in giá trị i ngoài vòng lặp

// Kết luận: Biến i khai báo bằng let chỉ có phạm vi trong khối lệnh (block scope) của vòng lặp for.
// Khi truy cập i ngoài vòng lặp sẽ bị lỗi ReferenceError vì i không tồn tại ngoài