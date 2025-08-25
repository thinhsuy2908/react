class HinhHoc {
    constructor(ten) {
        this.ten = ten;
    }
    inThongTin() {
        console.log(`Hình: ${this.ten}`);
    }
}
class HinhTron extends HinhHoc {
    constructor(banKinh) {
        super("Hình tròn");
        this.banKinh = banKinh;
    }
    tinhDienTich() {
        return Math.PI * this.banKinh * this.banKinh;
    }
}
class HinhVuong extends HinhHoc {
    constructor(canh) {
        super("Hình vuông");
        this.canh = canh;
    }
    tinhDienTich() {
        return this.canh * this.canh;
    }
}
const h1 = new HinhTron(5);
const h2 = new HinhVuong(4);
h1.inThongTin();
console.log("Diện tích:", h1.tinhDienTich());
h2.inThongTin();
console.log("Diện tích:", h2.tinhDienTich());
