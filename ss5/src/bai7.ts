function processInput(input: string | number | boolean): void {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            // Chuỗi toàn số
            const num = Number(input);
            console.log(num * num);
        } else {
            // Đếm ký tự chữ cái
            const letterCount = (input.match(/[a-zA-Z]/g) || []).length;
            console.log(`${letterCount} ký tự chữ cái`);
        }
    } else if (typeof input === "number") {
        if (input < 2 || !Number.isInteger(input)) {
            console.log("Không phải số nguyên tố");
            return;
        }
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
        console.log(isPrime ? "Là số nguyên tố" : "Không phải số nguyên tố");
    } else if (typeof input === "boolean") {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        } else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}
