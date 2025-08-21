// Định nghĩa kiểu Product
type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number; // optional
};

// Khởi tạo mảng listProduct gồm 3 sản phẩm mẫu
const listProduct: Product[] = [
    {
        id: "P001",
        name: "Áo thun",
        price: 200000,
        category: { id: "C01", name: "Thời trang" },
        discount: 10
    },
    {
        id: "P002",
        name: "Giày thể thao",
        price: 500000,
        category: { id: "C02", name: "Giày dép" }
    },
    {
        id: "P003",
        name: "Balo laptop",
        price: 350000,
        category: { id: "C03", name: "Phụ kiện" },
        discount: 5
    }
];

// Hàm tính giá sau giảm giá
function getFinalPrice(product: Product): number {
    if (product.discount) {
        return product.price * (1 - product.discount / 100);
    }
    return product.price;
}

// Hàm in thông tin sản phẩm
function printProductInfo(product: Product): void {
    const finalPrice = getFinalPrice(product);
    console.log(
        `Sản phẩm: ${product.name} (${product.category.name}) - Giá gốc: ${product.price}đ` +
        (product.discount ? `, Giảm giá: ${product.discount}%` : "") +
        `, Giá bán: ${finalPrice}đ`
    );
}

// In thông tin các