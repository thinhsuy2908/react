class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getInfo(): string {
        return `Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    viewBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
}

// Khởi tạo 5 quyển sách
const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book("Tuổi Thơ Dữ Dội", "Phùng Quán");
const book3 = new Book("Harry Potter", "J.K. Rowling");
const book4 = new Book("Đắc Nhân Tâm", "Dale Carnegie");
const book5 = new Book("Nhà Giả Kim", "Paulo Coelho");

// Khởi tạo thư viện và thêm sách
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

// Xem danh sách