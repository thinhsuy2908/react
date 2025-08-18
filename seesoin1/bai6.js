function createUser(name, age = 18, role = "user") {
    return {
        name,
        age,
        role
    };
}

// Ví dụ sử dụng:
console.log(createUser("Dev"));
// { name: 'Dev', age: 18, role: 'user' }

console.log(createUser("Nguyen Van A", 20, "Admin"));
// { name: 'Nguyen Van A', age: 20, role: 'Admin'