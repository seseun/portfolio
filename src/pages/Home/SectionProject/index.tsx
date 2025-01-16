/* eslint-disable @typescript-eslint/no-unused-vars */
import { Badge, Heading, VStack } from "@chakra-ui/react";
import { forwardRef, useCallback, useState } from "react";
import Gallery from "react-photo-gallery";

import { Section } from "components";
import ProjectCard from "./ProjectCard";
import ViewerModal from "./ViewerModal";

import prjKimplabs from "assets/images/prj_kimplabs.jpg";
import prjAvco from "assets/images/prj_avco.jpg";
import prjGapcha from "assets/images/prj_gapcha.jpg";
import prjUpchain from "assets/images/prj_upchain.jpg";

import prjAugust from "assets/images/prj_august.jpg";
import prjBlue from "assets/images/prj_blue.jpg";
import prjGoodup from "assets/images/prj_goodup.jpg";
import prjHanonn from "assets/images/prj_hanonn.jpg";
import prjHershey from "assets/images/prj_hershey.jpg";
import prjPure from "assets/images/prj_pure_organic.jpg";
import prjSolla from "assets/images/prj_solla.jpg";

import des19112 from "assets/images/design_1911_2.jpg";
import des19113 from "assets/images/design_1911_3.jpg";
import des19114 from "assets/images/design_1911_4.jpg";

const SectionProject = forwardRef<HTMLDivElement>((props, ref) => {
  const [currentImage, setCurrentImage] = useState<string>("");
  const [viewerModalOpen, setViewerModalOpen] = useState<boolean>(false);
  const openViewerModal = useCallback((e: any) => {
    setCurrentImage(e.target.src);
    setViewerModalOpen(true);
  }, []);
  const closeViewerModal = () => {
    setCurrentImage("");
    setViewerModalOpen(false);
  };
  return (
    <Section ref={ref} {...props}>
      <Heading as="h2">🚀 프로젝트</Heading>
      <ProjectCard
        prjKey="avco-homepage"
        company="아브코"
        subject="자사 홈페이지 리뉴얼"
        date="2024.04"
        desc={`자사 홈페이지를 React 웹으로 리뉴얼하였습니다.`}
        imgUrl={prjAvco}
        link="https://avco.kr/"
        comments={[
          "React, TypeScript를 사용하여 WEB을 구현했습니다.",
          "React-gsap을 이용했습니다.",
          "퍼블리싱/프론트개발 단독진행하였습니다.",
        ]}
        skills={
          <>
            <Badge colorScheme="blue">React</Badge>
            <Badge colorScheme="blue">TypeScript</Badge>
            <Badge colorScheme="blue">Chakra-ui</Badge>
            <Badge colorScheme="blue">React-hook-form</Badge>
            <Badge colorScheme="blue">Gsap</Badge>
            <Badge colorScheme="blue">React-gsap</Badge>
            <Badge colorScheme="blue">Axios</Badge>
            <Badge colorScheme="blue">Wordpress</Badge>
            <Badge colorScheme="red">Figma</Badge>
            <Badge colorScheme="green">GitHub</Badge>
            <Badge colorScheme="green">VSCode</Badge>
            <Badge colorScheme="green">Swagger</Badge>
          </>
        }
      />
      <VStack align="stretch" spacing={5}>
        <ProjectCard
          prjKey="kimplabs"
          company="아브코"
          subject="김프랩스"
          date="2024.04 ~"
          desc={`아비트리지 투자자들을 위한 김프 등의 트레이딩 정보를 제공하는 웹입니다.`}
          imgUrl={prjKimplabs}
          link="https://kimplabs.com/"
          comments={[
            "Next.js, TypeScript를 사용하여 WEB을 구현했습니다.",
            "웹소캣을 사용합니다.",
            "퍼블리싱/프론트개발 단독진행하였습니다.",
          ]}
          skills={
            <>
              <Badge colorScheme="blue">Next.js</Badge>
              <Badge colorScheme="blue">TypeScript</Badge>
              <Badge colorScheme="blue">Websocket</Badge>
              <Badge colorScheme="blue">Chakra-ui</Badge>
              <Badge colorScheme="blue">React-hook-form</Badge>
              <Badge colorScheme="blue">React-query</Badge>
              <Badge colorScheme="blue">react-virtualized</Badge>
              <Badge colorScheme="blue">Axios</Badge>
              <Badge colorScheme="blue">Zustand</Badge>
              <Badge colorScheme="red">Figma</Badge>
              <Badge colorScheme="green">GitHub</Badge>
              <Badge colorScheme="green">VSCode</Badge>
              <Badge colorScheme="green">Swagger</Badge>
            </>
          }
        />
        {/* <ProjectCard
          prjKey="gapcha"
          company="아브코"
          subject="갭챠"
          date="2024.02 ~ 2024.04"
          desc={`자사의 아비트리지를 이용한 트레이딩 봇을 이용하는 고객을 위한 클라이언트 웹입니다.`}
          imgUrl={prjGapcha}
          // link="https://gapcha.com/main"
          comments={[
            "Next.js, TypeScript를 사용하여 WEB을 리뉴얼했습니다.",
            "이용계정이 없으면 접근할 수 없어 링크를 기재하지 않았습니다.",
            "퍼블리싱/프론트개발 단독진행하였습니다.",
          ]}
          skills={
            <>
              <Badge colorScheme="blue">Next.js</Badge>
              <Badge colorScheme="blue">TypeScript</Badge>
              <Badge colorScheme="blue">Tailwind</Badge>
              <Badge colorScheme="blue">React-hook-form</Badge>
              <Badge colorScheme="blue">React-query</Badge>
              <Badge colorScheme="blue">Zustand</Badge>
              <Badge colorScheme="blue">Axios</Badge>
              <Badge colorScheme="red">Figma</Badge>
              <Badge colorScheme="green">GitHub</Badge>
              <Badge colorScheme="green">VSCode</Badge>
              <Badge colorScheme="green">Swagger</Badge>
              <Badge colorScheme="green">Postman</Badge>
            </>
          }
        /> */}
        <ProjectCard
          prjKey="mobytalk"
          company="모비텍"
          subject="모비톡"
          date="2023.10 ~ 2024.01"
          desc={`문자, 알림 발송 시스템 서비스입니다.`}
          link="https://www.mobytec.co.kr/html/business/mobytalk.html"
          comments={[
            "서비스 내용에 대해 참고할 수 있는 URL입니다.",
            "React, TypeScript를 사용하여 클라이언트 WEB 구현에 참여하였습니다.",
            "JWT를 이용한 로그인/로그아웃 기능, 관리자 설정 및 부서관리 파트를 맡아 구현했습니다.",
          ]}
          skills={
            <>
              <Badge colorScheme="blue">React</Badge>
              <Badge colorScheme="blue">TypeScript</Badge>
              <Badge colorScheme="blue">Chakra-ui</Badge>
              <Badge colorScheme="blue">React-hook-form</Badge>
              <Badge colorScheme="blue">React-query</Badge>
              <Badge colorScheme="blue">React-redux</Badge>
              <Badge colorScheme="blue">Axios</Badge>
              <Badge colorScheme="red">Figma</Badge>
              <Badge colorScheme="green">GitHub</Badge>
              <Badge colorScheme="green">VSCode</Badge>
              <Badge colorScheme="green">Swagger</Badge>
              <Badge colorScheme="green">Postman</Badge>
            </>
          }
        />
        <ProjectCard
          prjKey="up-renewal"
          company="유피체인"
          subject="자사 홈페이지 리뉴얼"
          date="2021.11 ~ 2022.07"
          desc={`자사 홈페이지를 React 웹으로 리뉴얼하였습니다.\n회사에서 진행하는 다른 프로젝트들과 병행하여 기간이 길었습니다.\n프론트를 처음부터 끝까지 해낸 첫 프로젝트입니다.`}
          imgUrl={prjUpchain}
          link="https://www.upchain.kr/"
          comments={[
            "PM으로 참여하여 전체 프로젝트를 관리하였습니다.",
            "퍼블리싱/프론트개발 단독진행하였습니다.",
            "gsap, svg 등을 이용했습니다.",
            "Google firebase를 이용한 Serverless web으로 작업하였습니다.\n사이트 내 ABOUT의 연혁, WORKS/NEWS의 리스트 및 내용에서 연결된 데이터는 모두 Google firebase의 Realtime Database에서 연결되었습니다.",
          ]}
          skills={
            <>
              <Badge colorScheme="blue">React</Badge>
              <Badge colorScheme="blue">React-bootstrap</Badge>
              <Badge colorScheme="blue">Gsap</Badge>
              <Badge colorScheme="blue">React-gsap</Badge>
              <Badge colorScheme="blue">Google Firebase</Badge>
              <Badge colorScheme="blue">Firebase Realtime Database</Badge>
              <Badge colorScheme="purple">SCSS</Badge>
              <Badge colorScheme="red">Figma</Badge>
              <Badge colorScheme="red">Adobe Illustrator</Badge>
              <Badge colorScheme="green">GitLab</Badge>
              <Badge colorScheme="green">SourceTree</Badge>
              <Badge colorScheme="green">Visual Studio Code</Badge>
            </>
          }
        />
        <ProjectCard
          prjKey="up"
          company="유피체인"
          subject="이외 프로젝트 수행이력"
          date="2020.08 ~ 2023.03"
          desc={`여러 프로젝트를 수행하였으나\n서비스 중지, 이벤트성 사이트, 자사 개발서비스인 경우가 다수 있어\n포트폴리오에 싣기 어려운 프로젝트가 많은 점을 설명드립니다.\n참고할 수 있는 URL이 있는 경우 함께 기재하였습니다.\n\n대부분 퍼블리싱은 단독으로 100% 기여하였습니다.\n프론트 개발의 경우 API연결을 제외한 폼 관리, 상태관리, 라이브러리 활용 등에 기여하였습니다.`}
          skills={
            <>
              <Badge colorScheme="purple">SCSS</Badge>
              <Badge colorScheme="red">Figma</Badge>
              <Badge colorScheme="red">Zeplin</Badge>
              <Badge colorScheme="red">Adobe Photoshop</Badge>
              <Badge colorScheme="red">Adobe Illustrator</Badge>
              <Badge colorScheme="green">GitLab</Badge>
              <Badge colorScheme="green">SourceTree</Badge>
              <Badge colorScheme="green">VS Code</Badge>
              <Badge colorScheme="green">Swagger</Badge>
            </>
          }
          projects={[
            {
              prjKey: "nft",
              subject: "[자사서비스] NFT거래소",
              comments: ["CLIENT WEB 퍼블리싱 및 프론트개발 서포트"],
              skills: (
                <>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">React-bootstrap</Badge>
                </>
              ),
            },
            {
              prjKey: "hmps",
              subject: "[자사서비스] HMPS",
              link: "https://www.upchain.kr/service/hmps",
              comments: [
                "서비스 내용에 대해 참고할 수 있는 URL입니다.",
                "CLIENT, ADMIN WEB 퍼블리싱 및 프론트개발 서포트",
              ],
              skills: (
                <>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">React-bootstrap</Badge>
                </>
              ),
            },
            {
              prjKey: "bnk-mydata",
              subject: "[SI] 부산은행 마이데이터(관리자)",
              comments: [
                "이진씨엔에스 협업",
                "리뉴얼 디자인 디렉팅",
                "익스플로러 기준 JSP웹 화면 WEB 퍼블리싱",
              ],
              skills: (
                <>
                  <Badge colorScheme="purple">Jsp</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">CSS3</Badge>
                  <Badge colorScheme="purple">JQuery</Badge>
                  <Badge colorScheme="purple">bootstrap</Badge>
                </>
              ),
            },
            {
              prjKey: "solid",
              subject: "[SI] 솔리드 거래소",
              comments: ["CLIENT, ADMIN WEB 퍼블리싱 및 프론트개발 서포트"],
              skills: (
                <>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">React-bootstrap</Badge>
                </>
              ),
            },
            {
              prjKey: "coinbit",
              subject: "[SI] 코인빗 거래소",
              comments: ["디자인 변경 반영 및 유지보수"],
              skills: (
                <>
                  <Badge colorScheme="blue">Vue</Badge>
                  <Badge colorScheme="blue">Angular</Badge>
                  <Badge colorScheme="purple">Jsp</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">CSS3</Badge>
                  <Badge colorScheme="purple">bootstrap</Badge>
                  <Badge colorScheme="green">IntelliJ IDEA</Badge>
                </>
              ),
            },
            {
              prjKey: "qbit",
              subject: "[SI] 큐비트 거래소",
              comments: [
                "AML 프로세스를 위한 회원가입 단계 분할 퍼블리싱 및 API 연결 서포트",
                "WEB 퍼블리싱 관련 유지보수",
              ],
              skills: (
                <>
                  <Badge colorScheme="blue">Vue</Badge>
                  <Badge colorScheme="blue">Angular</Badge>
                  <Badge colorScheme="purple">Jsp</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">CSS3</Badge>
                  <Badge colorScheme="purple">bootstrap</Badge>
                  <Badge colorScheme="green">IntelliJ IDEA</Badge>
                </>
              ),
            },
            {
              prjKey: "coldwallet",
              subject: "[자사서비스] 콜드월렛 개발",
              comments: ["WINDOWS 응용프로그램 APP 프론트 개발"],
              skills: <Badge colorScheme="blue">Flutter</Badge>,
            },
            {
              prjKey: "wizard",
              subject: "[SI] 위자드랩 웨어러블 디바이스 관리사이트",
              comments: ["ADMIN WEB 퍼블리싱 / 프론트 개발 서포트 "],
              skills: (
                <>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">React-bootstrap</Badge>
                </>
              ),
            },
            {
              prjKey: "eum",
              subject: "[자사서비스] EUM(블록체인 안전결제)",
              comments: ["APP 퍼블리싱 / 프론트 개발 서포트"],
              skills: (
                <>
                  <Badge colorScheme="blue">React Native</Badge>
                  <Badge colorScheme="purple">react-native-bootstrap</Badge>
                  <Badge colorScheme="green">Android Studio</Badge>
                </>
              ),
            },
            {
              prjKey: "eagles",
              subject: "[SI] Eagles System",
              link: "https://play.google.com/store/apps/details?id=com.synergy.client&hl=ko&gl=US",
              comments: [
                "서비스 내용에 대해 참고할 수 있는 URL입니다.",
                "APP 퍼블리싱, ADMIN WEB 퍼블리싱",
              ],
              skills: (
                <>
                  <Badge colorScheme="blue">React Native</Badge>
                  <Badge colorScheme="purple">react-native-bootstrap</Badge>
                  <Badge colorScheme="green">Android Studio</Badge>
                </>
              ),
            },
            {
              prjKey: "commons",
              subject: "[SI] COMMONS Goodch",
              link: "https://www.upchain.kr/works/detail/goodch",
              comments: [
                "서비스 내용에 대해 참고할 수 있는 URL입니다.",
                "APP 퍼블리싱 참여",
              ],
              skills: (
                <>
                  <Badge colorScheme="blue">React Native</Badge>
                  <Badge colorScheme="purple">react-native-bootstrap</Badge>
                  <Badge colorScheme="green">Android Studio</Badge>
                </>
              ),
            },
            {
              prjKey: "bcm-2020",
              subject: "[SI] BCM 2020(Busan Contents Market)",
              link: "https://www.upchain.kr/works/detail/bcm-2020",
              comments: [
                "서비스 내용에 대해 참고할 수 있는 URL입니다.",
                "CLIENT, ADMIN WEB 퍼블리싱",
              ],
              skills: (
                <>
                  <Badge colorScheme="purple">Jsp</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">CSS3</Badge>
                  <Badge colorScheme="purple">bootstrap</Badge>
                  <Badge colorScheme="green">IntelliJ IDEA</Badge>
                </>
              ),
            },
          ]}
        />
        <ProjectCard
          prjKey="jt"
          company="스튜디오제이티"
          subject="디자인 작업물"
          date="2019.09 ~ 2019.11"
          desc={`웹 에이전시에서 작업했던 디자인 결과물들 중 몇 가지입니다.\n작업물들은 근무했던 각 업체 및 적용사이트에 소유권/저작권이 있습니다.`}
          skills={
            <>
              <Badge colorScheme="red">Adobe Photoshop</Badge>
              <Badge colorScheme="red">Adobe Illustrator</Badge>
            </>
          }
        >
          <Gallery photos={designs} onClick={openViewerModal} />;
        </ProjectCard>
        <ProjectCard
          prjKey="onedesign"
          company="원디자인"
          subject="디자인 + 퍼블리싱 작업물"
          date="2017.01 ~ 2019.07"
          desc={`쇼핑몰 템플릿 업체에서 작업했던 디자인 + 퍼블리싱 결과물들 중 몇 가지입니다.\nPC/모바일 버전이 있고 카페24/메이크샵 솔루션에 맞게 각각 제작하였습니다.\n작업물들은 근무했던 각 업체 및 적용사이트에 소유권/저작권이 있습니다.`}
          templates={[
            {
              prjKey: "august",
              imgUrl: prjAugust,
              date: "2018.08",
              link: "https://ecudemo102131.cafe24.com/",
              subject: "[쇼핑몰템플릿] 어거스트",
              desc: "'어거스트' 디자인은 업계에서 여러 번 판매 1위를 달성하였고, 2018년 8월 등록 후 1년이 넘도록 상위권을 유지했던 템플릿 디자인으로 당시 회사에서 제작되어 왔던 템플릿 중 가장 많이 판매되어 회사에 기여도가 컸던 템플릿입니다.",
            },
            {
              prjKey: "pure",
              imgUrl: prjPure,
              date: "2019.06",
              subject: "[쇼핑몰템플릿] 퓨어 오가닉",
              link: "https://ecudemo127599.cafe24.com/",
            },
            {
              prjKey: "hanonn",
              imgUrl: prjHanonn,
              date: "2018.12 ~ 2019.01",
              subject: "[쇼핑몰템플릿] 하논",
              link: "https://ecudemo110146.cafe24.com/",
            },
            // {
            //   prjKey: "goodup",
            //   imgUrl: prjGoodup,
            //   date: "2018.09",
            //   subject: "[쇼핑몰템플릿] 굳업",
            //   link: "https://ecudemo105375.cafe24.com/",
            // },
            {
              prjKey: "solla",
              imgUrl: prjSolla,
              date: "2018.06 ~ 2018.07",
              subject: "[쇼핑몰템플릿] 솔라",
              link: "https://ecudemo92389.cafe24.com/",
            },
            // {
            //   prjKey: "blue",
            //   imgUrl: prjBlue,
            //   date: "2017.11 ~ 2018.01",
            //   subject: "[쇼핑몰템플릿] 블루",
            //   link: "https://ecudemo82341.cafe24.com/",
            // },
            // {
            //   prjKey: "hershey",
            //   imgUrl: prjHershey,
            //   date: "2017.08 ~ 2017.10",
            //   subject: "[쇼핑몰템플릿] 허쉬",
            //   link: "https://ecudemo81494.cafe24.com/",
            // },
          ]}
          skills={
            <>
              <Badge colorScheme="purple">HTML5</Badge>
              <Badge colorScheme="purple">CSS3</Badge>
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
      <ViewerModal
        isOpen={viewerModalOpen}
        onClose={closeViewerModal}
        currentImage={currentImage}
      />
    </Section>
  );
});

const designs = [
  {
    src: des19114,
    width: 760,
    height: 670,
  },
  {
    src: des19113,
    width: 533,
    height: 1399,
  },
  {
    src: des19112,
    width: 533,
    height: 1016,
  },
];

export default SectionProject;
