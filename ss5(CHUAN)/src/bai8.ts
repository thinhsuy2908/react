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

    getTitle(): string {
        return this.title;
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

    // Phương thức tìm kiếm sách theo tên
    searchBooksByTitle(title: string): void {
        const foundBooks = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(title.toLowerCase())
        );
        if (foundBooks.length === 0) {
            console.log("Không tìm thấy sách nào phù hợp.");
        } else {
            console.log("Các sách tìm thấy:");
            foundBooks.forEach(book => {
                console.log(book.getInfo());
            });
        }
    }
}

// Ví dụ sử dụng
const library = new Library();
library.addBook(new Book("b1", "Dế Mèn Phiêu Lưu Ký", "Tô Hoài"));
library.addBook(new Book("b2", "Tuổi Thơ Dữ Dội", "Phùng Quán"));
library.addBook(new Book("b3", "Harry Potter", "J.K. Rowling"));
library.addBook(new Book("b4", "Đắc Nhân Tâm", "Dale Carnegie"));
library.addBook(new Book("b5", "Nhà Giả Kim", "Paulo Coelho"));

library.searchBooksByTitle("Harry");
library.searchBooksByTitle("Dế Mèn");
library.searchBooksByTitle("Không có");