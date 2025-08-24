class Book {
    private id: string;
    private title: string;
    private author: string;

    constructor(id: string, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    getId(): string {
        return this.id;
    }

    getInfo(): string {
        return `Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }

    setTitle(newTitle: string): void {
        this.title = newTitle;
    }

    setAuthor(newAuthor: string): void {
        this.author = newAuthor;
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

    // Sửa thông tin sách theo id
    updateBookById(id: string, newTitle: string, newAuthor: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.setTitle(newTitle);
            book.setAuthor(newAuthor);
            console.log(`Đã cập nhật sách có id: ${id}`);
        } else {
            console.log(`Không tìm thấy sách với id: ${id}`);
        }
    }
}

// Khởi tạo 5 quyển sách
const book1 = new Book("b1", "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book("b2", "Tuổi Thơ Dữ Dội", "Phùng Quán");
const book3 = new Book("b3", "Harry Potter", "J.K. Rowling");
const book4 = new Book("b4", "Đắc Nhân Tâm", "Dale Carnegie");
const book5 = new Book("b5", "Nhà Giả Kim", "Paulo Coelho");

// Khởi tạo thư viện và thêm sách
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

// Sửa thông tin sách có id "b3"
library.updateBookById("b3", "Harry Potter và Hòn Đá Phù Thủy", "J.K. Rowling");

// Xem danh sách sách trong