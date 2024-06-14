import { createSaleOrders, getProduct } from './utils/fakeApi'; // Adjust import path as needed

// Function to fetch products
export const fetchProducts = async () => {
  try {
    const products = await getProduct(); // Assuming getProduct returns an array of products
    return products.map(product => ({
      value: product.id,
      label: product.name,
      skuOptions: product.sku.map(sku => ({
        value: sku.id,
        label: `${sku.unit} - ${sku.selling_price}`, // Adjust label as per your requirement
      })),
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Function to create a new sale order
export const createNewSaleOrder = async (formData) => {
  try {
    await createSaleOrders(formData); // Assuming createSaleOrders handles the API call
    console.log('Successfully created sale order:', formData);
    return true;
  } catch (error) {
    console.error('Error creating sale order:', error);
    return false;
  }
};
