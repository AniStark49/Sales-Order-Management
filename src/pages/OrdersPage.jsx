import  { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Button,
} from "@chakra-ui/react";
import SaleOrderModal from "../components/SaleOrderModal";
import SaleOrdersTable from "../components/SaleOrderList";

const OrdersPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isReadOnly, setReadOnly] = useState(false);

  const openCreateModal = () => {
    setSelectedOrder(null);
    setModalOpen(true);
    setReadOnly(false);
  };

  const openEditModal = (order, readOnly = false) => {
    setSelectedOrder(order);
    setModalOpen(true);
    setReadOnly(readOnly);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" h={"100vh"} w={'100vw'}>
      <Tabs>
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Button onClick={openCreateModal}>+ Sale Order</Button>
            <SaleOrdersTable type="active" onEdit={openEditModal} />
          </TabPanel>
          <TabPanel>
            <SaleOrdersTable
              type="completed"
              onEdit={(order) => openEditModal(order, true)}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {isModalOpen && (
        <SaleOrderModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          order={selectedOrder}
          readOnly={isReadOnly}
        />
      )}
    </Box>
  );
};

export default OrdersPage;
