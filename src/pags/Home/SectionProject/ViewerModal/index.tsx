import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

import ModalProps from "type/ModalProps";

interface ViewerModalProps extends ModalProps {
  currentImage: string;
}

function ViewerModal({ isOpen, onClose, currentImage }: ViewerModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent boxShadow="none" bgColor="transparent">
        <ModalBody p={0} textAlign="center">
          <Image src={currentImage} display="inline-block" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default ViewerModal;
