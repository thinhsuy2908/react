interface Student {
    name: string;
    age: number;
    email: string;
}

function introduceStudent(student: Student): void {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}

// Ví dụ sử dụng
const student1: Student = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "vana@example.com"
};
introduceStudent(student1);