class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    get getStudent() {
        return { id: this.id, name: this.name };
    }
    get getId() {
        return this.id;
    }
}
let allStudent = [];
class Classroom {
    students = [];
    showStudent() {
        this.students.forEach((e) => {
            console.log(e.getStudent);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        return this.students.filter((e) => e.getId === id);
    }
    addStudentInClass(id) {
        const index = allStudent.findIndex((stu) => stu.getId === id);
        if (index !== -1) {
            this.students.push(allStudent[index]);
            allStudent.splice(index, 1);
        }
    }
}
for (let i = 1; i <= 6; i++) {
    allStudent.push(new Student(i, `Student ${i}`));
}
let classA = new Classroom();
let classB = new Classroom();
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classA.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
classB.addStudentInClass(6);
console.log("Class A:");
classA.showStudent();
console.log("Class B:");
classB.showStudent();
console.log(classA.filterStudent(2));
console.log("All Students còn lại:", allStudent); // rỗng
export {};
