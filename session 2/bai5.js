const phoneBooks = [];
function addContact(name, phone, email) {
    const contact = { name, phone, email };
    phoneBooks.push(contact);
}
function displayContact() {
    if (phoneBooks.length === 0) {
        console.log("Danh bạ trống.");
        return;
    }
    console.log("Danh bạ:");
    phoneBooks.forEach((contact, index) => {
        console.log(`${index + 1}. Tên: ${contact.name}, SĐT: ${contact.phone}, Email: ${contact.email}`);
    });
}
addContact("Nguyễn Văn A", "0123456789", "a@gmail.com");
addContact("Trần Thị B",)