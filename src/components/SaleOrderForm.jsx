// components/SaleOrderForm.jsx

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api";

// eslint-disable-next-line react/prop-types, no-unused-vars
const SaleOrderForm = ({ order, onClose, readOnly }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: order || {
      customer_id: "",
      items: [],
      paid: false,
      invoice_no: "",
      invoice_date: new Date(),
    },
  });

  const { data: products, isLoading: productsLoading } = useQuery(
    "products",
    fetchProducts
  );

  useEffect(() => {
    if (order) reset(order);
  }, [order, reset]);

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  if (productsLoading) {
    return <div>Loading products...</div>;
  }

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.customer_id}>
          <FormLabel>Customer ID</FormLabel>
          <Controller
            name="customer_id"
            control={control}
            rules={{ required: "Customer ID is required" }}
            render={({ field }) => <Input {...field} isReadOnly={readOnly} />}
          />
          <FormErrorMessage>
            {errors.customer_id && errors.customer_id.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mt={4} isInvalid={errors.items}>
          <FormLabel>Items</FormLabel>
          <Controller
            name="items"
            control={control}
            rules={{ required: "At least one item is required" }}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={products.map(product => ({
                  value: product.id,
                  label: product.name,
                }))}
                isDisabled={readOnly}
                onChange={(selectedOptions) =>
                  field.onChange(
                    selectedOptions.map(option => ({
                      sku_id: option.value,
                      price: 0, // You might need to adjust this based on your SKU data
                      quantity: 1,
                    }))
                  )
                }
              />
            )}
          />
          <FormErrorMessage>
            {errors.items && errors.items.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mt={4} isInvalid={errors.invoice_no}>
          <FormLabel>Invoice Number</FormLabel>
          <Controller
            name="invoice_no"
            control={control}
            rules={{ required: "Invoice Number is required" }}
            render={({ field }) => <Input {...field} isReadOnly={readOnly} />}
          />
          <FormErrorMessage>
            {errors.invoice_no && errors.invoice_no.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mt={4} isInvalid={errors.invoice_date}>
          <FormLabel>Invoice Date</FormLabel>
          <Controller
            name="invoice_date"
            control={control}
            rules={{ required: "Invoice Date is required" }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                readOnly={readOnly}
                dateFormat="dd/MM/yyyy"
              />
            )}
          />
          <FormErrorMessage>
            {errors.invoice_date && errors.invoice_date.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Paid</FormLabel>
          <Controller
            name="paid"
            control={control}
            render={({ field }) => <Checkbox {...field} isReadOnly={readOnly} />}
          />
        </FormControl>
        {!readOnly && (
          <Button type="submit" mt={4}>
            {order ? "Update" : "Create"} Sale Order
          </Button>
        )}
      </form>
    </Box>
  );
};

export default SaleOrderForm;
