import {
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { forwardRef, useRef, useState } from "react";

import { Section } from "components";
import HelloModal from "./HelloModal";

import profile from "assets/images/profile.jpg";

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
  const text4Ref = useRef(null);
  const contactRef = useRef(null);
  const descRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: containerRef });
  useGSAP(
    () => {
      gsap.set(containerRef.current, {
        x: -32,
        opacity: 0,
      });
      gsap.set(imageRef.current, {
        x: -32,
        opacity: 0,
      });
      gsap.set(contactRef.current, {
        x: -32,
        opacity: 0,
      });
      gsap.set(descRef.current, {
        x: -32,
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
        x: 0,
        opacity: 1,
      })
      .to(imageRef.current, {
        x: 0,
        opacity: 1,
      })
      .fromTo(
        text1Ref.current,
        { text: "" },
        {
          text: "안녕하세요,",
        },
      )
      .fromTo(
        text2Ref.current,
        { text: "" },
        {
          duration: 2,
          text: "이승은",
        },
      )
      .fromTo(
        text3Ref.current,
        { text: "" },
        {
          text: "입니다",
        },
      )
      .fromTo(
        text4Ref.current,
        {
          text: "",
        },
        {
          text: "🫡",
        },
      )
      .fromTo(
        text4Ref.current,
        {
          rotate: "-20deg",
          scaleX: -0.9,
          scaleY: 0.9,
        },
        {
          rotate: "20deg",
          scaleX: -1.4,
          scaleY: 1.4,
          duration: 0.6,
        },
      )
      .to(contactRef.current, {
        x: 0,
        opacity: 1,
      })
      .to(descRef.current, {
        x: 0,
        opacity: 1,
      });
  });
  return (
    <Section borderTop={0} ref={ref} id="profile" {...props}>
      <HStack spacing={12} alignItems="flex-end" ref={containerRef}>
        <Image src={profile} w="320px" flexShrink={0} ref={imageRef} />
        <VStack align="stretch" spacing={8}>
          <Heading as="h1" color="gray.100" fontWeight={600} lineHeight="short">
            <Text ref={text1Ref} as="span" fontSize="5xl" />
            <br />
            <Text
              ref={text2Ref}
              as="strong"
              bgClip="text"
              bgGradient={[
                "linear(to-r, pink.400 0%, purple.400 50%,blue.400 90%)",
              ]}
              fontSize="5xl"
              fontWeight={800}
            />
            <Text ref={text3Ref} as="span" fontSize="5xl" />
            <Text ref={text4Ref} as="span" display="inline-block" ms={1} />
          </Heading>
          <HStack spacing={3} ref={contactRef}>
            <HStack spacing={2}>
              <Text as="span">🤙</Text>
              <Text color="gray.500">+82 10-5492-1581</Text>
            </HStack>
            <Divider orientation="vertical" h={4} />
            <HStack spacing={2}>
              <Text as="span">📧</Text>
              <Text color="gray.500">dev.seseun@gmail.com</Text>
            </HStack>
            <Divider orientation="vertical" h={4} />
            <HStack spacing={2}>
              <Text as="span">📍</Text>
              <Text color="gray.500">부산진구 전포대로 300번길</Text>
            </HStack>
          </HStack>
          <VStack align="stretch" spacing={1} fontSize="xl" ref={descRef}>
            <Text color="gray.300" fontSize="xl">
              디자인, 퍼블리싱으로 IT업계에 발을 들이게 되었습니다.
            </Text>
            <Text color="gray.300" fontSize="xl">
              디자인보다는 퍼블리싱에, 퍼블리싱보다는 프론트개발에 재미를
              느낍니다.
            </Text>
            <Text color="gray.300" fontSize="xl">
              인터랙티브한 사이트에 관심이 있고, 잘 디자인 된 UI/UX를
              좋아합니다.
            </Text>
          </VStack>
        </VStack>
      </HStack>
      <HelloModal isOpen={helloModalOpen} onClose={closeHelloModal} />
    </Section>
  );
});
export default SectionProfile;
