import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import SaleOrderForm from './SaleOrderForm';

// eslint-disable-next-line react/prop-types
const SaleOrderModal = ({ isOpen, onClose, order }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{order ? 'Edit Sale Order' : 'Create Sale Order'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
         <div>
          Hello world
         </div>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;
