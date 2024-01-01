import {
  Badge,
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Tween, Timeline } from "react-gsap";

import profile from "assets/images/profile.jpg";
import { forwardRef } from "react";
import { Section, SkillBox } from "components";

const SectionProfile = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section borderTop={0} ref={ref} {...props}>
      <HStack spacing={12} alignItems="flex-end">
        <Image src={profile} w="320px" flexShrink={0} />
        <VStack align="stretch" spacing={8}>
          <Heading
            as="h1"
            color="gray.100"
            fontSize="5xl"
            fontWeight={600}
            lineHeight="short"
          >
            안녕하세요,
            <Text
              as="strong"
              bgClip="text"
              bgGradient={[
                "linear(to-r, pink.400 0%, purple.400 50%,blue.400 90%)",
              ]}
              ms={3}
              fontWeight={800}
            >
              이승은
            </Text>
            입니다
            <Timeline repeat={-1} yoyo>
              <Tween
                from={{ rotate: "0deg", scaleX: -1 }}
                to={{ rotate: "20deg", scaleX: -1 }}
                duration={1}
              >
                <Text as="span" display="inline-block" ms={1}>
                  🫡
                </Text>
              </Tween>
            </Timeline>
          </Heading>
          <HStack spacing={3}>
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
          <VStack align="stretch" spacing={1} fontSize="xl">
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
          <VStack
            align="stretch"
            bgColor="gray.900"
            px={5}
            py={3}
            borderRadius="lg"
          >
            <Text color="gray.500" fontSize="md" lineHeight="tall">
              이 페이지는 저를 좀 더 잘 소개해보고자 만든 포트폴리오입니다.
              <br />
              제가 무엇을 해왔고, 어떤 길을 가고 있는 시점인지를 잘 봐주시고
              <br />
              귀사에 필요한 인재라고 생각되신다면 연락주십시오😊
              <br />
              <br />이 페이지는 아래와 같은 기술스택으로 만들어졌습니다.
            </Text>
            <SkillBox noBg>
              <Badge colorScheme="blue">React</Badge>
              <Badge colorScheme="blue">TypeScript</Badge>
              <Badge colorScheme="blue">chakra-ui</Badge>
              <Badge colorScheme="blue">gsap</Badge>
              <Badge colorScheme="blue">yarn</Badge>
              <Badge colorScheme="green">GitHub</Badge>
              <Badge colorScheme="green">VSCode</Badge>
              <Badge colorScheme="green">VSCode Git-graph</Badge>
            </SkillBox>
          </VStack>
        </VStack>
      </HStack>
    </Section>
  );
});
export default SectionProfile;
