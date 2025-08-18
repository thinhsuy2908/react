const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};

// Destructuring để lấy title và author từ data
const { title, author } = response.data;

// Destructuring để lấy name và email, đổi tên biến
const { name: authorName, email: authorEmail } = author;

console.log(title);        // Destructuring in JavaScript
console.log(author);       // { name: "Dev", email: "Dev@gmail.com" }
console.log(authorName);   // Dev
console.log(authorEmail);  //