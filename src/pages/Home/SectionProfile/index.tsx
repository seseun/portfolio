import {
  Box,
  Button,
  Circle,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { forwardRef, useRef, useState } from "react";

import profile from "assets/images/profile.jpg";
import { Section } from "components";

import HelloModal from "./HelloModal";

const SectionProfile = forwardRef<HTMLDivElement>((props, ref) => {
  const [helloModalOpen, setHelloModalOpen] = useState(true);
  const closeHelloModal = () => {
    setHelloModalOpen(false);
    profileTimeline();
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const contactRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: containerRef });
  useGSAP(
    () => {
      gsap.set(containerRef.current, {
        y: 16,
        opacity: 0,
      });
      gsap.set(imageRef.current, {
        y: 16,
        opacity: 0,
      });
      gsap.set(contactRef.current, {
        y: 16,
        opacity: 0,
      });
    },
    { scope: containerRef },
  );

  const profileTimeline = contextSafe(() => {
    gsap
      .timeline()
      .delay(0.5)
      .to(containerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
      })
      .to(imageRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
      })
      .fromTo(
        text1Ref.current,
        { text: "　" },
        {
          text: "안녕하세요, 이승은입니다🫡",
          duration: 0.75,
        },
      )
      .fromTo(
        text2Ref.current,
        { text: "　" },
        {
          text: "디자인, 퍼블리싱, 프론트 개발의 경력이 있습니다.",
          duration: 0.75,
        },
      )
      .fromTo(
        text3Ref.current,
        { text: "　" },
        {
          text: "지금은 Next.js, typescript를 사용한 웹 프론트 개발을 하고있습니다.",
          duration: 0.75,
        },
      )
      .to(contactRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
      });
  });
  return (
    <Section id="profile" borderTop={0} pt={0} ref={ref} {...props}>
      <HStack spacing={10} alignItems="center" ref={containerRef}>
        <Circle
          // bgColor="gray.800"
          flexShrink={0}
          overflow="hidden"
          size="400px"
          ref={imageRef}
        >
          <Image src={profile} />
        </Circle>
        <VStack align="stretch" spacing={6}>
          <Heading
            as="h1"
            color="gray.100"
            fontSize="2xl"
            fontWeight={600}
            lineHeight="short"
            ref={text1Ref}
          ></Heading>
          <Box>
            <Text color="gray.300" fontSize="md" ref={text2Ref}></Text>
            <Text color="gray.300" fontSize="md" ref={text3Ref}></Text>
          </Box>
          <VStack
            align="stretch"
            spacing={0}
            ref={contactRef}
            sx={{
              span: {
                fontSize: "sm",
              },
              p: {
                color: "gray.500",
                fontSize: "md",
              },
            }}
          >
            <Flex align="center" gap={3}>
              <Text as="span">🤙</Text>
              <Text>+82 10-5492-1581</Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Text as="span">📍</Text>
              <Text>부산진구</Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Text as="span">📨</Text>
              <Text>dev.seseun@gmail.com</Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Text as="span">👾</Text>
              <Button
                as="a"
                variant="link"
                fontSize="sm"
                href="https://github.com/seseun"
              >
                https://github.com/seseun
              </Button>
            </Flex>
          </VStack>
        </VStack>
      </HStack>
      <HelloModal isOpen={helloModalOpen} onClose={closeHelloModal} />
    </Section>
  );
});
export default SectionProfile;
