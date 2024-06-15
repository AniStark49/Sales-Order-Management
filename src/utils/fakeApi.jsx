export const getSaleOrders = async (type) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          invoice_no: "INV001",
          customer_profile: { name: "Customer 1" },
          invoice_date: "2024-07-05",
          type,
        },
      ]);
    }, 1000);
  });
};

export const createSaleOrders = async (newOrder) => {
  console.log("Creating sale order", newOrder);
};

export const updateSaleOrders = async (updatedOrder) => {
  console.log("Updating sale order", updatedOrder);
};

export const getProduct = async () => {
  return [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
  ];
};
