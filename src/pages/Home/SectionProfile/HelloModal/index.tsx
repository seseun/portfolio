import {
  Badge,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SkillBox } from "components";

import ModalProps from "type/ModalProps";

function HelloModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent py={4} boxShadow="none">
        <ModalBody>
          <VStack align="center" textAlign="center" spacing={6}>
            <Text color="gray.300" fontSize="sm">
              이 페이지는 저를 좀 더 잘 소개해보고자 만든 포트폴리오입니다.
              <br />
              아래와 같은 기술스택으로 만들어졌습니다.
            </Text>
            <SkillBox align="center" noBg>
              <Badge colorScheme="blue">React</Badge>
              <Badge colorScheme="blue">TypeScript</Badge>
              <Badge colorScheme="blue">Chakra-ui</Badge>
              <Badge colorScheme="blue">gsap/react</Badge>
              <Badge colorScheme="green">GitHub</Badge>
              <Badge colorScheme="green">VSCode</Badge>
            </SkillBox>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default HelloModal;
