// Khai báo biến với kiểu dữ liệu cụ thể
let num1: number = 8;
let num2: number = 2;
let num3: number;
let num4: string = "10";
let num5: boolean = true;

// Cộng
num3 = num1 + num2;
console.log("Cộng:", num3);

// Trừ
num3 = num1 - num2;
console.log("Trừ:", num3);

// Nhân
num3 = num1 * num2;
console.log("Nhân:", num3);

// Chia
num3 = num1 / num2;
console.log("Chia:", num3);

// Cộng chuỗi với boolean
let result = num4 + num5;
console.log("num4 + num5:", result);

// Giải thích:
// Khi cộng một chuỗi với một giá trị boolean, JavaScript/TypeScript sẽ tự động chuyển boolean thành chuỗi ("true" hoặc "false"),
// sau đó nối hai chuỗi lại với nhau. Vì vậy, "10" +