class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}

// Tạo hai đối tượng Vehicle
const vehicle1 = new Vehicle("Civic", 2020, "Honda");
const vehicle2 = new Vehicle("Camry", 2022, "Toyota");

// In thông tin hai đối tượng
console.log(`Tên: ${vehicle1.name}, Năm sản xuất: ${vehicle1.year}, Hãng xe: ${vehicle1.company}`);
console.log(`Tên: ${vehicle2.name}, Năm sản xuất: ${vehicle2.year}, Hãng xe: ${vehicle2.company}`);