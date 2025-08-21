type ProducT = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string; // optional
};

function calculateOrderTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}

function printOrder(order: Order): void {
  console.log(`Đơn hàng: #${order.orderId}`);
  console.log(`Khách hàng: ${order.customerName}`);
  console.log("Sản phẩm:");
  order.items.forEach((item) => {
    const { name, price } = item.product;
    const { quantity } = item;
    const itemTotal = price * quantity;
    console.log(
      `- ${name} × ${quantity} → ${itemTotal.toLocaleString("vi-VN")} VND`
    );
  });
  const total = calculateOrderTotal(order);
  console.log(`Tổng cộng: ${total.toLocaleString("vi-VN")} VND`);
  if (order.note) {
    console.log(`Ghi chú: ${order.note}`);
  }
}

// Ví dụ sử dụng
const exampleOrder: Order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        {
            product: { id: "p1", name: "Áo sơ mi", price: 250000 },
            quantity: 2,
        },
        {
            product: { id: "p2", name: "Quần tây", price: 400000 },
            quantity: 1,
        },
    ],
    note: "Giao sau 18h",
};

printOrder(exampleOrder);