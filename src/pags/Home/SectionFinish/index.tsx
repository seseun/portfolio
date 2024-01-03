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
          그래서 전형적인 이력서 형식보다는,
          <br />
          실제 기술을 활용하여 제 자신을 보여주는 것이 더 좋겠다고 생각해
          <br />
          최근에 제가 사용하고 있는 기술을 활용하여 이 포트폴리오를 구성하게
          되었습니다.
          <br />
          마지막으로, 저에 대해 조금 말씀드리려 합니다.
        </Text>
        <Text>
          -
          <br />
          앞서 경력에서 기재하였듯 저는 퍼블리셔로 근무하면서 여러가지 언어를
          경험했습니다.
          <br />
          React, Vue 같은 js언어를 사용하면서 자연스럽게 퍼블리싱과 프론트 사이
          경계를 넘나들게 되었습니다.
          <br />
          그 과정에서 계속해서 한계에 부딪혔고 그 한계를 넘어가는 경험을 통해,
          <br />제 자신이 프론트개발자로서 더 큰 성장을 할 수 있을 거라는 확신을
          얻어
          <br />
          프론트엔드 개발자로 전향을 결정하게 되었습니다.
        </Text>
        <Text>
          -<br />
          저는 공식적인 개발 교육을 받은 적이 없습니다.
          <br />
          필요하다 생각되는 부분은 따로 강의를 찾아 학습하였고,
          <br />그 외에는 모두 실제 업무에서 얻은 경험으로 성장해왔습니다.
          <br />
          따라서 부족한 부분이 분명 있을 거라고 생각합니다.
          <br />
          <br />
          하지만 계속해서 새로운 언어로 결과물을 만들어내는 과정에서 제가 느낀
          것은
          <br />
          도전하려는 마음가짐, 끈기있게 물고 늘어지는 자세,
          <br />
          동료들과 협력하고 소통하는 것에 대해 마음을 여는 것이 굉장히
          중요하다는 것입니다.
          <br />
          <br />
          부딪혀왔던 모든 언어를 다 무리 없이 구사할 수 있다고 말하기는
          어렵겠지만
          <br />
          저는 이러한 경험으로 새로운 기술을 두려워하지 않는 자세를 가지게
          되었다고 생각합니다.
          <br />
          배우고 적응하며 일하는 데에 노력을 아끼지 않고
          <br />
          책임감을 가지고 일할 것임은 분명한 점을 말씀드리고 싶습니다.
        </Text>
        <Text>
          -<br />
          사람을 좋아하고, 그러다보니 함께 일하는 것 역시 좋아합니다.
          <br />
          저는 개발과 디자인 사이의 업무를 했기 때문에
          <br />
          양 쪽의 입장을 파악하고 조율을 위한 커뮤니케이션을 계속해서
          해왔습니다.
          <br />
          특히 디자이너와 소통에 있어서 디자인 업무를 해 본 경험이 좋은 영향을
          주었습니다.
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
          이런 상황의 제가 밀어줄 수 있고, 또 저를 끌어줄 수 있는 회사를 찾고자
          합니다.
          <br />
          <br />
          이 포트폴리오가 저에 대한 판단에 도움이 되었기를 바랍니다.
          <br />
          구체적인 이력 내용은 포트폴리오 링크를 확인하신 이력서, 혹은{" "}
          <Button variant="link" color="yellow.600">
            이 PDF파일
          </Button>
          을 참고해주세요.
          <br />
          포트폴리오를 봐주셔서 감사합니다.😊
        </Text>
      </VStack>
    </Section>
  );
});
export default SectionFinish;
