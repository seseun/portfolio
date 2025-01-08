import { Badge, Heading, Text, VStack } from "@chakra-ui/react";

import { Section } from "components";
import { forwardRef } from "react";
import CareerPara from "./CareerPara";
import CareerTimeline from "./CareerTimeline";

const SectionCareer = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref} {...props}>
      <Heading as="h2">
        🎢 경력
        <Text as="small">총 7년 1개월 (2025.01 기준)</Text>
      </Heading>
      <CareerTimeline />
      <VStack align="stretch" spacing={12}>
        <CareerPara subject={`디자인, 퍼블리싱으로 커리어를 시작했습니다.`}>
          <Text>
            쇼핑몰 템플릿을 전문적으로 제작하는 회사에서 첫 직장 생활을
            했습니다.
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
            <br />
            당시 단독제작한 템플릿으로 여러 차례 업계 1위 및 상위권을 유지하여
            회사의 성장에 기여하였습니다.
          </Text>
        </CareerPara>
        <CareerPara
          subject={`디자인보다는 개발이 제가 갈 방향임을 인지하고,\n이에 따라 관련 기술을 습득하며 능력을 키워오고 있습니다.`}
        >
          <Text>
            개발 분야로 전향하여 퍼블리셔로서 일하면서
            <br />
            주로 <Badge colorScheme="blue">React</Badge>기반으로 웹 프로젝트를
            진행하게 되었습니다.
            <br />
            자연스럽게 퍼블리싱과 프론트개발 사이 경계를 넘나들다
            <br />
            현재는 프론트개발자로 일하고 있습니다.
            <br />
            <Text as="span" color="gray.600">
              ㅡ여전히 퍼블리싱도 함께 합니다. 퍼블리싱이 프론트의 개념 안에
              있다고 생각합니다.ㅡ
            </Text>
            <br />
            <br />
            현재 근무하고 있는 회사에서{" "}
            <Badge colorScheme="blue">Next.js</Badge>와 함께&nbsp;
            <Badge colorScheme="blue">TypeScript</Badge>,
            <Badge colorScheme="blue">react-query</Badge> 등의 스택으로 경험을
            쌓고 있습니다.
          </Text>
        </CareerPara>
      </VStack>
    </Section>
  );
});
export default SectionCareer;
