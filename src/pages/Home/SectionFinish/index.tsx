/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { forwardRef } from "react";

import { Section } from "components";

const SectionFinish = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref} {...props}>
      <Heading as="h2">🙇‍♀️ 포트폴리오를 봐주셔서 감사합니다 🙇‍♀️</Heading>
      <VStack align="stretch" spacing={6}>
        <Text>
          -<br />
          저는 공식적인 프론트 개발 교육을 받은 적이 없습니다.
          <br />
          실무 경험과 개인적인 학습을 통해 필요한 기술을 익혀와서,
          <br />
          부족한 부분이 분명 있을 거라고 생각합니다.
          <br />
          <br />
          <Text>
            하지만 계속해서 새로운 것을 배우고 결과물을 만들어가는 과정에서
            <br />
            도전하는 마음가짐, 끈기있게 물고 늘어지는 자세,
            <br />
            동료들과 협력하고 소통하는 것에 마음을 여는 태도를 가지게 되었다고
            생각합니다.
            <br />
            이러한 태도로, 주어진 일에 책임감을 가지고 임할 것임은 분명한 점을
            말씀드리고 싶습니다.
          </Text>
        </Text>
        <Text>
          -<br />
          <Text>
            사람을 좋아하고, 그러다보니 함께 일하는 것 역시 좋아합니다.
          </Text>
          <br />
          저는 개발과 디자인 사이의 업무를 경험했기 때문에
          <br />
          양 쪽의 입장을 파악하고 조율을 위한 커뮤니케이션을 계속해서
          해왔습니다.
          <br />
          제 이런 면이 함께 일하는 회사에서
          <br />
          좋은 무드를 만드는 데에 도움이 될 거라고 생각합니다.
        </Text>
        <Text>
          이 포트폴리오가 저에 대한 판단에 도움이 되었기를 바랍니다.
          <br />
          포트폴리오를 봐주셔서 감사합니다.
        </Text>
      </VStack>
    </Section>
  );
});
export default SectionFinish;
