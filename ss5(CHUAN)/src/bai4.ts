class xeco {
    public name: string;
    protected year: number;
    private company: string;
    public readonly id: string;

    constructor(id: string, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    thongtin(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Tên: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng xe: ${this.company}`);
    }
}

// Tạo thực thể và kiểm tra
const vehicle = new Vehicle("V001", "Civic", 2020, "honda");
vehicle.thongtin();