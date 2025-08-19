
const products = [
  {
    name: "A",
    price: 100,
    discount: 0.1,
    quantity: 2,
    bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 },
  },
  {
    name: "B",
    price: 200,
    discount: 0.2,
    quantity: 1,
    bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 },
  },
  {
    name: "C",
    price: 300,
    discount: 0,
    quantity: 3,
    bulkDiscount: { minQuantity: 3, extraDiscount: 0.2 },
  },
];
function calcBill(products) {
  const totalBeforeDiscount = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );
  const details = products.map((p) => {
    let finalDiscount = p.discount;
    if (p.quantity >= p.bulkDiscount.minQuantity) {
      finalDiscount += p.bulkDiscount.extraDiscount;
    }
    let finalPrice = Math.round(p.price * (1 - finalDiscount));
    let subtotal = finalPrice * p.quantity;
    return {
      name: p.name,
      finalPrice,
      quantity: p.quantity,
      subtotal,
    };
  });
  const totalAfterDiscount = details.reduce((sum, d) => sum + d.subtotal, 0);
  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    details,
  };
}
console.log(calcBill(products));