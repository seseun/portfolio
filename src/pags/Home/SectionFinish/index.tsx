import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { forwardRef } from "react";

import { Section } from "components";

const SectionFinish = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref} {...props}>
      <Heading as="h2">🙇‍♀️ 포트폴리오를 봐주셔서 감사합니다.</Heading>
      <VStack align="stretch" spacing={6}>
        <Text>
          -
          <br />
          저는 개발 분야에서의 경력이 많지 않습니다.
          <br />
          제가 어떤 역량을 가지고 있는지 보여드릴 수 있는 프로젝트도
          제한적입니다.
          <br />
          <Text as="span" color="gray.100" bgColor="gray.900" fontWeight="300">
            그래서 전형적인 이력서 형식보다는,
            <br />
            실제 기술을 활용하여 제 자신을 보여주는 것이 더 좋겠다고 생각해
            <br />
            최근에 제가 사용하고 있는 기술을 활용하여 이 포트폴리오를 구성하게
            되었습니다.
          </Text>
          <br />
          마지막으로, 저에 대해 조금 말씀드리려 합니다.
        </Text>
        <Text>
          -<br />
          저는 공식적인 프론트 개발 교육을 받은 적이 없습니다.
          <br />
          필요하다 생각되는 부분은 따로 학습하였고,
          <br />
          제가 가진 기술 대부분이 실제 업무에서의 경험으로 얻은 것입니다.
          <br />
          따라서 부족한 부분이 분명 있을 거라고 생각합니다.
          <br />
          <br />
          <Text as="span" color="gray.100" bgColor="gray.900" fontWeight="300">
            하지만 저는 계속해서 새로운 기술로 결과물을 만들어냈던 경험으로
            <br />
            도전하려는 마음가짐, 끈기있게 물고 늘어지는 자세,
            <br />
            동료들과 협력하고 소통하는 것에 마음을 여는 태도를 가지게 되었다고
            생각합니다.
            <br />
            이러한 태도로, 부족함 없이 주어진 일을 수행할 수 있도록
            <br />
            책임감을 가지고 업무에 임할 것임은 분명한 점을 말씀드리고 싶습니다.
          </Text>
        </Text>
        <Text>
          -<br />
          <Text as="span" color="gray.100" bgColor="gray.900" fontWeight="300">
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
          -<br />
          이것도 저것도 다 할 수 있다고 하는 이력서 보다는
          <br />
          솔직하게 제가 가고 있는 길을 알려드리고
          <br />
          지금의 제가 밀어줄 수 있고, 또 저를 끌어줄 수 있는 회사를 찾고자
          합니다.
          <br />
          <br />
          이 포트폴리오가 저에 대한 판단에 도움이 되었기를 바랍니다.
          <br />
          <Text as="span" color="gray.100" bgColor="gray.900" fontWeight="300">
            구체적인 이력 내용은 포트폴리오 링크를 확인하신 이력서를
            참고해주세요.
          </Text>
          <br />
          포트폴리오를 봐주셔서 감사합니다.😊
        </Text>
      </VStack>
    </Section>
  );
});
export default SectionFinish;
