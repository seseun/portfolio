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
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent bgColor="gray.700" py={4} boxShadow="none">
        <ModalBody>
          <VStack align="stretch" spacing={4}>
            <Text color="gray.200" fontSize="md" lineHeight="tall">
              이 페이지는 저를 좀 더 잘 소개해보고자 만든 포트폴리오입니다.
              <br />
              제가 무엇을 해왔고, 어떤 길을 가고 있는 시점인지를 잘 봐주시고
              <br />
              귀사에 도움이 될 인재라고 생각되신다면 연락주십시오😊
              <br />
              <br />이 페이지는 아래와 같은 기술스택으로 만들어졌습니다.
            </Text>
            <SkillBox noBg>
              <Badge colorScheme="blue">React</Badge>
              <Badge colorScheme="blue">TypeScript</Badge>
              <Badge colorScheme="blue">chakra-ui</Badge>
              <Badge colorScheme="blue">gsap/react</Badge>
              <Badge colorScheme="blue">yarn</Badge>
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
