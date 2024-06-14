import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getSaleOrders } from '../utils/fakeApi';

// eslint-disable-next-line react/prop-types
const SaleOrdersTable = ({ type, onEdit }) => {
  const { data: saleOrders, isLoading } = useQuery({
    queryKey: ['saleOrders', type],
    queryFn: () => getSaleOrders(type),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Invoice No</Th>
          <Th>Customer</Th>
          <Th>Invoice Date</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {saleOrders.map(order => (
          <Tr key={order.id}>
            <Td>{order.invoice_no}</Td>
            <Td>{order.customer_profile.name}</Td>
            <Td>{order.invoice_date}</Td>
            <Td>
              <Button onClick={() => onEdit(order)}>
                Edit
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SaleOrdersTable;
