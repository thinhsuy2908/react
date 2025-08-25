abstract class HinhHoc {
    constructor(public ten: string) {}
    abstract tinhDienTich(): number;
    inThongTin(): void {
        console.log(`Hình: ${this.ten}`);
    }
}
class HinhTron extends HinhHoc {
    constructor(public banKinh: number) {
        super("Hình tròn");
    }

    tinhDienTich(): number {
        return Math.PI * this.banKinh * this.banKinh;
    }
}
class HinhVuong extends HinhHoc {
    constructor(public canh: number) {
        super("Hình vuông");
    }

    tinhDienTich(): number {
        return this.canh * this.canh;
    }
}
const h1: HinhHoc = new HinhTron(5);
const h2: HinhHoc = new HinhVuong(4);

h1.inThongTin();
console.log("Diện tích:", h1.tinhDienTich());

h2.inThongTin();
console.log("Diện tích:", h2.tinhDienTich());
