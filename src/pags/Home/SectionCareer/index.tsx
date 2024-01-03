import { Badge, Heading, Text, VStack } from "@chakra-ui/react";

import { Section } from "components";
import { forwardRef } from "react";
import CareerPara from "./CareerPara";
import CareerTimeline from "./CareerTimeline";

const SectionCareer = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref} {...props}>
      <Heading as="h2">
        🎢 저를 알고 싶으시다면, 먼저 제 경력을 확인해주세요!
        <Text as="small">총 6년 1개월 (2024.01 기준)</Text>
      </Heading>
      <CareerTimeline />
      <VStack align="stretch" spacing={12}>
        <CareerPara
          subject={`쇼핑몰 템플릿을 전문적으로 제작하는 회사에서\n첫 직장 생활을 했습니다.`}
        >
          <Text>
            다수의 고객을 대상으로 하는 템플릿을 제작했습니다.
            <br />
            컨셉을 고민하여 사이트를 디자인(
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
        </CareerPara>
        <CareerPara
          subject={`웹 에이전시의 디자인팀으로 경력을 이어가며\n다양한 디자인업무를 경험했습니다.`}
        >
          <Text>
            각종 배너/일러스트/아이콘을 제작하거나
            <br />
            디자인 유지보수, 페이지 디자인 가이드PSD 작업 등의 경험을 했습니다.
            <br />
            디자인팀 업무에 대한 이해도와 디자인툴을 다루는 숙련도를 좀 더 쌓을
            수 있었습니다.
            <br />(<Badge colorScheme="red">Adobe Photoshop</Badge>,
            <Badge colorScheme="red">Adobe Illustrator</Badge>)
          </Text>
        </CareerPara>
        <CareerPara
          subject={`디자인보다는 개발이 제가 갈 방향임을 인지하고,\n이에 따라 관련 기술을 습득하며 능력을 키워오고 있습니다.`}
        >
          <Text>
            처음 프론트엔드 개발자로서의 방향성을 인지한 회사에서
            <br />
            저는 퍼블리셔로서의 역할을 수행하며
            <br />
            <Badge colorScheme="blue">React</Badge>,
            <Badge colorScheme="blue">Vue</Badge>,
            <Badge colorScheme="blue">React Native</Badge>,
            <Badge colorScheme="blue">Flutter</Badge> 등의 다양한 언어를
            경험했습니다.
            <br />그 중에서도 <Badge colorScheme="blue">React</Badge>기반으로 웹
            프로젝트를 구축하는 일이 주를 이뤘습니다.
            <br />
            <br />
            현재 새로운 회사에서 <Badge colorScheme="blue">React</Badge>와 함께{" "}
            <Badge colorScheme="blue">TypeScript</Badge>,
            <Badge colorScheme="blue">react-query</Badge> 등의
            <br />
            최신 언어와 라이브러리를 사용하며 새로운 경험을 쌓고 있습니다.
          </Text>
        </CareerPara>
      </VStack>
    </Section>
  );
});
export default SectionCareer;
