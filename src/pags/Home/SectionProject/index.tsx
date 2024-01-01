import { Badge, Heading, VStack } from "@chakra-ui/react";
import { forwardRef } from "react";

import prjUpchain from "assets/images/prj_upchain.jpg";
import prjAugust from "assets/images/prj_august.jpg";
import prjPure from "assets/images/prj_pure_organic.jpg";
import prjHanonn from "assets/images/prj_hanonn.jpg";
import prjGoodup from "assets/images/prj_goodup.jpg";
import prjSolla from "assets/images/prj_solla.jpg";
import prjBlue from "assets/images/prj_blue.jpg";
import prjHershey from "assets/images/prj_hershey.jpg";
import des1909 from "assets/images/design_1909.jpg";
import des19111 from "assets/images/design_1911_1.jpg";
import des19112 from "assets/images/design_1911_2.jpg";
import des19113 from "assets/images/design_1911_3.jpg";
import des19114 from "assets/images/design_1911_4.jpg";

import { Section } from "components";
import ProjectCard from "./ProjectCard";

const SectionProject = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref} {...props}>
      <Heading as="h2">🚀 수행했던 프로젝트들이에요.</Heading>
      <VStack align="stretch" spacing={5}>
        <ProjectCard
          key="mobytalk"
          company="모비텍"
          subject="모비톡"
          date="2023.10 ~"
          desc={`현재 제가 속한 회사에서는 공공기관을 대상으로 하는 문자 발송 시스템 서비스를 개발 중입니다.\n아직 배워야 할 부분이 많지만 찬찬히 제 역량을 향상시키고 있습니다.\n제가 최근에 어떤 기술을 사용하고 있는지를 보여드리기 위해 이 프로젝트를 포트폴리오에 추가했습니다.`}
          comments={[
            "React, TypeScript를 사용하여 클라이언트들이 사용할 WEB을 구현하고 있습니다.",
            "JWT를 이용한 로그인/로그아웃 기능을 맡아 구현하였습니다.",
            "부서 관리 및 관리자 관리 파트를 맡아 작업하였습니다.",
            "양방향 상담 관리 파트를 맡아 작업중입니다.",
          ]}
          skills={
            <>
              <Badge colorScheme="blue">React</Badge>
              <Badge colorScheme="blue">TypeScript</Badge>
              <Badge colorScheme="blue">chakra-ui</Badge>
              <Badge colorScheme="blue">react-hook-form</Badge>
              <Badge colorScheme="blue">react-query</Badge>
              <Badge colorScheme="blue">react-redux</Badge>
              <Badge colorScheme="blue">yarn</Badge>
            </>
          }
        />
        <ProjectCard
          key="up-renewal"
          company="유피체인"
          subject="자사 홈페이지 리뉴얼"
          date="2021.11 ~ 2022.07"
          desc={`자사 홈페이지를 React 웹으로 리뉴얼하였습니다.\n회사에서 진행하는 다른 프로젝트들과 병행하여 기간이 꽤 길었습니다.\n비록 완벽하진 않겠지만 혼자서 처음부터 끝까지 완성해낸 프로젝트라 완성 후 큰 만족감을 느꼈습니다.`}
          imgUrl={prjUpchain}
          link="https://www.upchain.kr/"
          comments={[
            "PM으로 참여하여 전체 프로젝트를 관리하였습니다.",
            "React를 이용한 반응형 퍼블리싱/개발 파트에서 배포 외 모든 부분을 단독 진행하였습니다.",
            "gsap, svg 등을 이용하여 인터랙티브한 웹으로 구현하였습니다.",
            "Google firebase를 이용한 Serverless web으로 작업하였습니다.\n사이트 내 ABOUT의 연혁, WORKS/NEWS의 리스트 및 내용에서 연결된 데이터는 모두 Google firebase의 Realtime Database에서 연결되었습니다.",
          ]}
          skills={
            <>
              <Badge colorScheme="blue">React</Badge>
              <Badge colorScheme="blue">react-bootstrap</Badge>
              <Badge colorScheme="blue">gsap</Badge>
              <Badge colorScheme="blue">react-gsap</Badge>
              <Badge colorScheme="blue">Google Firebase</Badge>
              <Badge colorScheme="blue">Firebase Realtime Database</Badge>
              <Badge colorScheme="purple">SCSS</Badge>
              <Badge colorScheme="red">Figma</Badge>
              <Badge colorScheme="red">Adobe Illustrator</Badge>
              <Badge colorScheme="green">Git</Badge>
              <Badge colorScheme="green">SourceTree</Badge>
              <Badge colorScheme="green">Visual Studio Code</Badge>
            </>
          }
        />
        <ProjectCard
          key="up"
          company="유피체인"
          subject="이외 프로젝트 수행이력"
          date="2020.08 ~ 2023.03"
          desc={`여러 프로젝트를 수행하였으나 클라이언트 회사들이 서비스를 중지하거나, \n잠깐 진행되는 이벤트성 사이트, 자사에서 개발하던 서비스인 경우가 다수 있습니다. \n프로젝트의 정확한 이름이 아닌 클라이언트 회사로 지칭하여 프로젝트를 내려준 경우도 많아\n포트폴리오에 싣기 어려운 프로젝트들이 많은 점을 설명드립니다.\n\n참고할 수 있는 URL이 있는 경우 함께 기재하였습니다.`}
          skills={
            <>
              <Badge colorScheme="blue">npm</Badge>
              <Badge colorScheme="purple">SCSS</Badge>
              <Badge colorScheme="red">Figma</Badge>
              <Badge colorScheme="red">Zeplin</Badge>
              <Badge colorScheme="red">Adobe Photoshop</Badge>
              <Badge colorScheme="red">Adobe Illustrator</Badge>
              <Badge colorScheme="green">Git</Badge>
              <Badge colorScheme="green">SourceTree</Badge>
              <Badge colorScheme="green">Visual Studio Code</Badge>
              <Badge colorScheme="green">Swagger</Badge>
              <Badge colorScheme="green">Postman</Badge>
            </>
          }
          projects={[
            {
              key: "wifree",
              subject: "[SI] WIFREE 와이파이 연결 서비스",
              link: "https://www.leotechkor.com/pages/business/wfs/wfs.html",
              comments: ["CLIENT, ADMIN WEB 퍼블리싱 및 프론트개발"],
              skills: (
                <>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </>
              ),
            },
            {
              key: "graduate",
              subject: "[SI] 2023.02 영산대학교 메타버스 졸업전시회",
              comments: ["CLIENT, ADMIN WEB 퍼블리싱 및 프론트개발"],
              skills: (
                <>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </>
              ),
            },
            {
              key: "nft",
              subject: "[자사서비스] NFT거래소",
              comments: ["CLIENT WEB 퍼블리싱 및 프론트개발"],
              skills: (
                <>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </>
              ),
            },
            {
              key: "hmps",
              subject: "[자사서비스] HMPS",
              link: "https://www.upchain.kr/service/hmps",
              comments: ["CLIENT, ADMIN WEB 퍼블리싱 및 프론트개발"],
              skills: (
                <>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </>
              ),
            },
            {
              key: "bnk-mydata",
              subject: "[SI] 부산은행 마이데이터(관리자)",
              comments: [
                "이진씨엔에스 협업",
                "리뉴얼 디자인 디렉팅",
                "익스플로러 기준 JSP웹 화면 WEB 퍼블리싱",
              ],
              skills: (
                <>
                  <Badge colorScheme="blue">Jsp</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">CSS 3</Badge>
                  <Badge colorScheme="purple">JQuery</Badge>
                  <Badge colorScheme="purple">bootstrap</Badge>
                </>
              ),
            },
            {
              key: "solid",
              subject: "[SI] 솔리드 거래소",
              comments: ["CLIENT, ADMIN WEB 퍼블리싱 및 프론트개발"],
              skills: (
                <>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </>
              ),
            },
            {
              key: "coinbit",
              subject: "[SI] 코인빗 거래소",
              comments: ["디자인 변경 반영 및 유지보수"],
              skills: (
                <>
                  <Badge colorScheme="blue">Jsp</Badge>
                  <Badge colorScheme="blue">Vue</Badge>
                  <Badge colorScheme="blue">Angular</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">CSS 3</Badge>
                  <Badge colorScheme="purple">bootstrap</Badge>
                  <Badge colorScheme="green">IntelliJ IDEA</Badge>
                </>
              ),
            },
            {
              key: "qbit",
              subject: "[SI] 큐비트 거래소",
              link: "https://www.qbitexchange.io/signup/setAccount.do",
              comments: [
                "AML 프로세스를 위한 회원가입 단계 분할 퍼블리싱 및 API 연결 서포트",
                "WEB 퍼블리싱 관련 유지보수",
              ],
              skills: (
                <>
                  <Badge colorScheme="blue">Jsp</Badge>
                  <Badge colorScheme="blue">Vue</Badge>
                  <Badge colorScheme="blue">Angular</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">CSS 3</Badge>
                  <Badge colorScheme="purple">bootstrap</Badge>
                  <Badge colorScheme="green">IntelliJ IDEA</Badge>
                </>
              ),
            },
            {
              key: "coldwallet",
              subject: "[자사서비스] 콜드월렛 개발",
              comments: ["WINDOWS 응용프로그램 APP 프론트 개발"],
              skills: <Badge colorScheme="blue">Flutter</Badge>,
            },
            {
              key: "wizard",
              subject: "[SI] 위자드랩 웨어러블 디바이스 관리사이트",
              comments: ["ADMIN WEB 퍼블리싱 / 프론트 개발 서포트"],
              skills: (
                <>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </>
              ),
            },
            {
              key: "eum",
              subject: "[자사서비스] EUM(블록체인 안전결제)",
              comments: ["APP 퍼블리싱/프론트 서포트"],
              skills: (
                <>
                  <Badge colorScheme="blue">React Native</Badge>
                  <Badge colorScheme="purple">react-native-bootstrap</Badge>
                  <Badge colorScheme="green">Android Studio</Badge>
                </>
              ),
            },
            {
              key: "eagles",
              subject: "[SI] Eagles System",
              link: "https://play.google.com/store/apps/details?id=com.synergy.client&hl=ko&gl=US",
              comments: ["APP 퍼블리싱, ADMIN WEB 퍼블리싱"],
              skills: (
                <>
                  <Badge colorScheme="blue">React Native</Badge>
                  <Badge colorScheme="purple">react-native-bootstrap</Badge>
                  <Badge colorScheme="green">Android Studio</Badge>
                </>
              ),
            },
            {
              key: "commons",
              subject: "[SI] COMMONS Goodch",
              link: "https://play.google.com/store/apps/details?id=com.mallup.goodch",
              comments: [" APP 퍼블리싱 / 프론트 개발 서포트"],
              skills: (
                <>
                  <Badge colorScheme="blue">React Native</Badge>
                  <Badge colorScheme="purple">react-native-bootstrap</Badge>
                  <Badge colorScheme="green">Android Studio</Badge>
                </>
              ),
            },
            {
              key: "bcm-2020",
              subject: "[SI] BCM 2020(Busan Contents Market)",
              link: "https://www.upchain.kr/works/detail/bcm-2020",
              comments: ["CLIENT, ADMIN WEB 퍼블리싱"],
              skills: (
                <>
                  <Badge colorScheme="blue">Jsp</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">CSS 3</Badge>
                  <Badge colorScheme="purple">bootstrap</Badge>
                  <Badge colorScheme="green">IntelliJ IDEA</Badge>
                </>
              ),
            },
          ]}
        />
        <ProjectCard
          key="jt"
          company="스튜디오제이티"
          subject="디자인 작업물"
          date="2019.09 ~ 2019.11"
          desc={`웹 에이전시에서 작업했던 디자인 결과물들 중 몇 가지입니다.\n작업물들은 근무했던 각 업체 및 적용사이트에 소유권/저작권이 있습니다.`}
          designs={[
            {
              key: "langbel",
              imgUrl: des19114,
              date: "2019.11",
              subject: "[랑벨 글로벌 원스토어] 이벤트배너",
            },
            {
              key: "chungdami-happy",
              imgUrl: des19113,
              date: "2019.11",
              subject: "[청담i 성형외과] 이벤트배너",
            },
            {
              key: "chungdami-egg",
              imgUrl: des19112,
              date: "2019.11",
              subject: "[청담i 성형외과] 이벤트배너",
            },
          ]}
          skills={
            <>
              <Badge colorScheme="red">Adobe Photoshop</Badge>
              <Badge colorScheme="red">Adobe Illustrator</Badge>
            </>
          }
        />
        <ProjectCard
          key="onedesign"
          company="원디자인"
          subject="디자인 + 퍼블리싱 작업물"
          date="2017.01 ~ 2019.07"
          desc={`쇼핑몰 템플릿 업체에서 작업했던 디자인 + 퍼블리싱 결과물들 중 몇 가지입니다.\n작업물들은 근무했던 각 업체 및 적용사이트에 소유권/저작권이 있습니다.`}
          templates={[
            {
              key: "august",
              imgUrl: prjAugust,
              date: "2018.08",
              link: "https://ecudemo102131.cafe24.com/",
              subject: "[쇼핑몰템플릿] 어거스트",
              desc: "'어거스트' 디자인은 판매 사이트(카페24디자인센터: https://d.cafe24.com/home/)에서 여러 번 1등을 한 적이 있고, 2018년 8월 등록 후 1년이 넘도록 상위권을 유지했던 템플릿 디자인으로 당시 회사에서 제작되어 왔던 템플릿 중 가장 많이 판매되어 회사에 기여도가 컸던 템플릿입니다.",
            },
            {
              key: "pure",
              imgUrl: prjPure,
              date: "2019.06",
              subject: "[쇼핑몰템플릿] 퓨어 오가닉",
              link: "https://ecudemo127599.cafe24.com/",
            },
            {
              key: "hanonn",
              imgUrl: prjHanonn,
              date: "2018.12 ~ 2019.01",
              subject: "[쇼핑몰템플릿] 하논",
              link: "https://ecudemo110146.cafe24.com/",
            },
            {
              key: "hanonn",
              imgUrl: prjGoodup,
              date: "2018.09",
              subject: "[쇼핑몰템플릿] 굳업",
              link: "https://ecudemo105375.cafe24.com/",
            },
            {
              key: "hanonn",
              imgUrl: prjSolla,
              date: "2018.06 ~ 2018.07",
              subject: "[쇼핑몰템플릿] 솔라",
              link: "https://ecudemo92389.cafe24.com/",
            },
            {
              key: "hanonn",
              imgUrl: prjBlue,
              date: "2017.11 ~ 2018.01",
              subject: "[쇼핑몰템플릿] 블루",
              link: "https://ecudemo82341.cafe24.com/",
            },
            {
              key: "hanonn",
              imgUrl: prjHershey,
              date: "2017.08 ~ 2017.10",
              subject: "[쇼핑몰템플릿] 허쉬",
              link: "https://ecudemo81494.cafe24.com/",
            },
          ]}
          skills={
            <>
              <Badge colorScheme="purple">HTML5</Badge>
              <Badge colorScheme="purple">CSS 3</Badge>
              <Badge colorScheme="purple">JQuery</Badge>
              <Badge colorScheme="red">Adobe Photoshop</Badge>
              <Badge colorScheme="red">Adobe Illustrator</Badge>
              <Badge colorScheme="green">Editplus</Badge>
              <Badge colorScheme="green">FileZilla</Badge>
              <Badge colorScheme="gray">카페24</Badge>
              <Badge colorScheme="gray">메이크샵</Badge>
            </>
          }
        />
      </VStack>
    </Section>
  );
});
export default SectionProject;
