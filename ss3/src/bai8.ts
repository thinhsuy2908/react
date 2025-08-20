// Hàm kiểm tra và chuyển đổi tham số về số, trả về NaN nếu không hợp lệ
function toNumber(value: number | string): number {
    if (typeof value === "number") return value;
    const num = Number(value);
    return isNaN(num) ? NaN : num;
}

// Hàm cộng
function add(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (isNaN(numA) || isNaN(numB)) return "Tham số không hợp lệ";
    return numA + numB;
}

// Hàm trừ
function subtract(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (isNaN(numA) || isNaN(numB)) return "Tham số không hợp lệ";
    return numA - numB;
}

// Hàm nhân
function multiply(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (isNaN(numA) || isNaN(numB)) return "Tham số không hợp lệ";
    return numA * numB;
}

// Hàm chia
function divide(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (isNaN(numA) || isNaN(numB) || numB === 0) return "Tham số không hợp lệ hoặc chia cho 0";
    return numA / numB;
}

// Ví dụ kiểm tra
console.log(add(5, "3"));         // 8
console.log(subtract("10", 2));   // 8
console.log(multiply("4", "2"));  // 8
console.log(divide("8", "2"));    // 4
console.log(add("abc", 2));       // Tham số không hợp lệ
console.log(divide(10, 0));       // Tham số không hợp lệ hoặc chia cho