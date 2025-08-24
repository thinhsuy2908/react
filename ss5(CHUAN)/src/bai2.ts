class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

// Khai báo mảng chứa các sinh viên
const students: Student[] = [];

// Tạo các thực thể sinh viên và lưu vào mảng
students.push(new Student(1, 20, "sv1@example.com"));
students.push(new Student(2, 21, "sv2@example.com"));
students.push(new Student(3, 22, "sv3@example.com"));

// Duyệt mảng và in ra thông tin sinh viên
students.forEach(student => {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
});