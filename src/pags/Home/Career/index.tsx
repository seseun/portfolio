import {
  Badge,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Section } from "components";
import { forwardRef } from "react";

const Career = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section id="career" ref={ref} {...props}>
      <Heading as="h2">
        🎢 저를 알고 싶으시다면, 먼저 제 경력을 확인해주세요!
        <Text as="small">총 6년 0개월 (2023.12 기준)</Text>
      </Heading>
      <VStack align="stretch">
        <HStack
          justify="space-between"
          fontSize="sm"
          fontWeight="800"
          color="gray.500"
        >
          <Text as="span">0</Text>
          <Text as="span">1</Text>
          <Text as="span">2</Text>
          <Text as="span">3</Text>
          <Text as="span">4</Text>
          <Text as="span">5</Text>
          <Text as="span">6</Text>
        </HStack>
        <HStack
          justify="space-between"
          px={1}
          position="relative"
          sx={{
            hr: {
              h: "180px",
            },
          }}
        >
          <Divider orientation="vertical" />
          <Divider orientation="vertical" />
          <Divider orientation="vertical" />
          <Divider orientation="vertical" />
          <Divider orientation="vertical" />
          <Divider orientation="vertical" />
          <Divider orientation="vertical" />
          <HStack
            as="ul"
            spacing={0}
            alignItems="center"
            justifyContent="flex-start"
            position="absolute"
            top={0}
            left={0}
            px={1}
            w="100%"
            h="100%"
            sx={{
              "& > li": {
                alignItems: "center",
                borderRadius: "sm",
                color: "white",
                fontWeight: 700,
                h: 10,
                px: 2,
              },
            }}
          >
            <Flex
              as="li"
              bgGradient="linear(to-r, pink.300, pink.600)"
              flex="43% 0 0"
              justify="flex-start"
              mt="4rem"
            >
              Design / Publishing
            </Flex>
            <Flex
              as="li"
              bgGradient="linear(to-r, red.300, red.400)"
              flex="4% 0 0"
              justify="center"
            >
              Design
            </Flex>
            <Flex
              as="li"
              bgGradient="linear(to-r, purple.400 60%, blue.400 100%)"
              flex={1}
              justify="flex-end"
              mt="-4rem"
            >
              Publishing / Front-end
            </Flex>
          </HStack>
        </HStack>
      </VStack>
      <VStack align="stretch" spacing={12}>
        <VStack align="stretch" spacing={4}>
          <Heading as="h3">
            🖥️
            <br />
            쇼핑몰 템플릿을 전문적으로 제작하는 회사에서
            <br />첫 직장 생활을 했습니다.
          </Heading>
          <Text>
            쇼핑몰 템플릿을 제작하여 다수의 고객에게 판매하였습니다.
            <br />
            컨셉을 생각하여 사이트를 디자인(
            <Badge colorScheme="red">Adobe Photoshop</Badge>,
            <Badge colorScheme="red">Adobe Illustrator</Badge>)하고,
            <br />
            솔루션(
            <Badge colorScheme="gray">카페24</Badge>,
            <Badge colorScheme="gray">메이크샵</Badge>) 환경에 맞게 코딩(
            <Badge colorScheme="purple">HTML5</Badge>,
            <Badge colorScheme="purple">CSS 3</Badge>,
            <Badge colorScheme="purple">JQuery</Badge>)을 진행하였습니다.
          </Text>
        </VStack>
        <VStack align="stretch" spacing={4}>
          <Heading as="h3">
            🎨
            <br />
            이후 웹 에이전시의 디자인팀으로 이직하여
            <br />
            디자인업무를 경험했습니다.
          </Heading>
          <Text>
            각종 배너/일러스트/아이콘을 제작하거나
            <br />
            디자인 유지보수, 페이지 디자인 가이드PSD 작업 등의 경험을 했습니다.
            <br />
            디자인팀 업무에 대한 이해도와 감각, 디자인툴을 다루는 숙련도를 좀 더
            쌓을 수 있었습니다.
            <br />(<Badge colorScheme="red">Adobe Photoshop</Badge>,
            <Badge colorScheme="red">Adobe Illustrator</Badge>)
          </Text>
        </VStack>
        <VStack align="stretch" spacing={4}>
          <Heading as="h3">
            👩‍💻
            <br />
            디자인보다는 개발이 제가 갈 방향임을 인지하고, <br />
            이에 따라 관련 기술을 습득하며 능력을 키워왔습니다.
          </Heading>
          <Text>
            처음 프론트엔드 개발자로서의 방향성을 인지한 회사에서 저는
            퍼블리셔로서의 역할을 수행하며
            <br />
            <Badge colorScheme="blue">Jsp</Badge>,
            <Badge colorScheme="blue">React</Badge>,
            <Badge colorScheme="blue">Vue</Badge>,
            <Badge colorScheme="blue">Angular</Badge>,
            <Badge colorScheme="blue">React Native</Badge>,
            <Badge colorScheme="blue">Flutter</Badge> 등의 다양한 언어를
            경험했습니다.
            <br />그 중에서도 <Badge colorScheme="blue">React</Badge>기반으로 웹
            프로젝트를 구축하는 일이 주를 이뤘습니다.
            <br />
            <br />
            당시 퍼블리싱과 프론트엔드 개발 사이의 구분이
            <br />
            점점 모호해지는 경향이 있었고, 이러한 경계를 넘나드는 과정에서
            <br />
            프론트엔드 개발 분야에서 더 큰 도전과 성장을 이룰 수 있다는 생각이
            들어
            <br />
            프론트엔드 개발자로서의 방향성을 확신하게 되었습니다.
            <br />
            <br />
            현재 새로운 회사에서 <Badge colorScheme="blue">React</Badge>와 함께{" "}
            <Badge colorScheme="blue">TypeScript</Badge>,
            <Badge colorScheme="blue">React-query</Badge> 등의 최신 언어와
            라이브러리를 경험하고 있습니다.
          </Text>
        </VStack>
      </VStack>
    </Section>
  );
});
export default Career;
