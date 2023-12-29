import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import prjUpchain from "assets/images/prj_upchain.jpg";

import { Section } from "components";
import { forwardRef } from "react";

const Project = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section id="project" ref={ref} {...props}>
      <Heading as="h2">🥲 보여드릴 수 있는 프로젝트를 더 만들고싶어요!</Heading>
      <VStack align="stretch" spacing={6} layerStyle="prjBox">
        <Heading as="h3">
          〰️
          <br />
          [유피체인] 자사 홈페이지 리뉴얼
          <Text as="small">2021.11 ~ 2022.07</Text>
        </Heading>
        <Text>
          자사 홈페이지를 React 웹으로 리뉴얼하였습니다.
          <br />
          회사에서 진행하는 다른 프로젝트들과 병행하여 기간이 꽤 길었습니다.
        </Text>
        <HStack align="flex-end" spacing={5}>
          <Box layerStyle="monitor">
            <Image src={prjUpchain} />
          </Box>
          <Box as="ul" layerStyle="iconList">
            <Box as="li">
              <Text as="i">🔗</Text>
              <Box>
                <Button
                  as="a"
                  target="_blank"
                  variant="link"
                  href="https://www.upchain.kr/"
                >
                  https://www.upchain.kr/
                </Button>
              </Box>
            </Box>
            <Box as="li">
              <Text as="i">📌</Text>
              <Text>PM으로 참여하여 전체 프로젝트를 관리하였습니다.</Text>
            </Box>
            <Box as="li">
              <Text as="i">📌</Text>
              <Text>
                React를 이용한 반응형 퍼블리싱/개발을 진행하였고
                <br />
                개발 관련하여 배포 외 모든 부분을 단독 진행하였습니다.
              </Text>
            </Box>
            <Box as="li">
              <Text as="i">📌</Text>
              <Text>
                Gsap, svg 등을 이용하여 인터랙티브한 웹으로 구현하였습니다.
              </Text>
            </Box>
            <Box as="li">
              <Text as="i">📌</Text>
              <Text>
                Google firebase를 이용한 Serverless web으로 작업하였습니다.
                <br />
                사이트 내 ABOUT의 연혁, WORKS/NEWS의 리스트 및 내용에서 연결된
                데이터는 모두 Google firebase의 Realtime Database에서
                연결되었습니다.
              </Text>
            </Box>
          </Box>
        </HStack>
        <Box layerStyle="stackBgBox">
          <Text as="span">👾</Text>
          <Flex wrap="wrap" gap={2}>
            <Badge colorScheme="blue">React</Badge>
            <Badge colorScheme="blue">React-Bootstrap</Badge>
            <Badge colorScheme="blue">gsap</Badge>
            <Badge colorScheme="blue">React-gsap</Badge>
            <Badge colorScheme="blue">Google Firebase</Badge>
            <Badge colorScheme="blue">Firebase Realtime Database</Badge>
            <Badge colorScheme="purple">SCSS</Badge>
            <Badge colorScheme="red">Figma</Badge>
            <Badge colorScheme="red">Adobe Illustrator</Badge>
            <Badge colorScheme="green">Git</Badge>
            <Badge colorScheme="green">SourceTree</Badge>
            <Badge colorScheme="green">Visual Studio Code</Badge>
          </Flex>
        </Box>
      </VStack>
      <VStack align="stretch" spacing={6} layerStyle="prjBox">
        <Heading as="h3">
          〰️
          <br />
          [유피체인] 이외 프로젝트 수행이력
          <Text as="small">2020.08 ~ 2023.03</Text>
        </Heading>
        <Text>
          많은 프로젝트를 수행했으나 클라이언트 회사들이 서비스를 중지하거나,
          <br />
          잠깐 진행되는 이벤트성 사이트, 자사에서 개발하던 서비스인 경우가
          대부분이었습니다. <br />
          프로젝트의 정확한 이름이 아닌 클라이언트 회사로 지칭하여 프로젝트를
          내려준 경우도 많아
          <br />
          포트폴리오에 싣기 어려운 경력들이 많은 점을 설명드립니다.
          <br />
          <br />
          최신순으로 정렬하였으며, 참고할 수 있는 URL이 있는 경우 함께
          기재하였습니다.
        </Text>
        <VStack spacing={4} align="stretch" as="ul" layerStyle="iconList">
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">WIFREE 와이파이 연결 서비스</Text>
              <Text>- CLIENT, ADMIN WEB 퍼블리싱 및 프론트개발</Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">2023.02 영산대학교 메타버스 졸업전시회</Text>
              <Text>- CLIENT, ADMIN WEB 퍼블리싱 및 프론트개발</Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">[자사서비스] NFT거래소</Text>
              <Text>- CLIENT WEB 퍼블리싱 및 프론트개발</Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">[자사서비스] HMPS</Text>
              <Text>- CLIENT, ADMIN WEB 퍼블리싱 및 프론트개발</Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">부산은행 마이데이터(관리자)</Text>
              <Text>
                - 이진씨엔에스 협업
                <br />- 리뉴얼 디자인 디렉팅
                <br />- 익스플로러 기준 JSP웹 화면 WEB 퍼블리싱
              </Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">Jsp</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">SCSS</Badge>
                  <Badge colorScheme="purple">CSS 3</Badge>
                  <Badge colorScheme="purple">JQuery</Badge>
                  <Badge colorScheme="purple">Bootstrap</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">솔리드 거래소</Text>
              <Text>- CLIENT, ADMIN WEB 퍼블리싱 및 프론트개발</Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">큐비트 거래소</Text>
              <Text>
                -
                <Button
                  as="a"
                  target="_blank"
                  variant="link"
                  href="https://www.qbitexchange.io/signup/setAccount.do"
                  ml={1}
                >
                  AML 프로세스를 위한 회원가입 단계 분할 퍼블리싱 / API 연결
                  서포트
                </Button>
                <br />- WEB 퍼블리싱 관련 유지보수
              </Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">Jsp</Badge>
                  <Badge colorScheme="blue">Vue</Badge>
                  <Badge colorScheme="blue">Angular</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">SCSS</Badge>
                  <Badge colorScheme="purple">CSS 3</Badge>
                  <Badge colorScheme="purple">Bootstrap</Badge>
                  <Badge colorScheme="green">IntelliJ IDEA</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">코인빗 거래소</Text>
              <Text>- 디자인 변경 반영 및 유지보수</Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">Jsp</Badge>
                  <Badge colorScheme="blue">Vue</Badge>
                  <Badge colorScheme="blue">Angular</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">SCSS</Badge>
                  <Badge colorScheme="purple">CSS 3</Badge>
                  <Badge colorScheme="purple">Bootstrap</Badge>
                  <Badge colorScheme="green">IntelliJ IDEA</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">[자사서비스] 콜드월렛 개발</Text>
              <Text>
                - WINDOWS 응용프로그램 APP 퍼블리싱
                <br />- API 연결
              </Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">Flutter</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">위자드랩 웨어러블 디바이스 관리사이트</Text>
              <Text>-ADMIN WEB 퍼블리싱 / 프론트 개발 서포트</Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">React</Badge>
                  <Badge colorScheme="purple">react-bootstrap</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">[자사서비스] EUM(블록체인 안전결제)</Text>
              <Text>- APP 퍼블리싱/프론트 서포트</Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">React Native</Badge>
                  <Badge colorScheme="purple">react-native-bootstrap</Badge>
                  <Badge colorScheme="green">Android Studio</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">Eagles System</Text>
              <Text>
                -
                <Button
                  as="a"
                  target="_blank"
                  variant="link"
                  href="https://play.google.com/store/apps/details?id=com.synergy.client&hl=ko&gl=US"
                  ml={1}
                >
                  APP 퍼블리싱
                </Button>
                <br />- ADMIN WEB 퍼블리싱
              </Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">React Native</Badge>
                  <Badge colorScheme="purple">react-native-bootstrap</Badge>
                  <Badge colorScheme="green">Android Studio</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">COMMONS Goodch</Text>
              <Text>
                -
                <Button
                  as="a"
                  target="_blank"
                  variant="link"
                  href="https://play.google.com/store/apps/details?id=com.mallup.goodch"
                  ml={1}
                >
                  APP 퍼블리싱 / 프론트 개발 서포트
                </Button>
              </Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">React Native</Badge>
                  <Badge colorScheme="purple">react-native-bootstrap</Badge>
                  <Badge colorScheme="green">Android Studio</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box as="li">
            <Text as="i">📌</Text>
            <Box as="div">
              <Text as="strong">BCM 2020(Busan Contents Market)</Text>
              <Text>- CLIENT, ADMIN WEB 퍼블리싱</Text>
              <Box layerStyle="stackBox" mt={2}>
                <Text as="span">👾</Text>
                <Flex wrap="wrap" gap={2}>
                  <Badge colorScheme="blue">Jsp</Badge>
                  <Badge colorScheme="purple">HTML5</Badge>
                  <Badge colorScheme="purple">SCSS</Badge>
                  <Badge colorScheme="purple">CSS 3</Badge>
                  <Badge colorScheme="purple">Bootstrap</Badge>
                  <Badge colorScheme="green">IntelliJ IDEA</Badge>
                </Flex>
              </Box>
            </Box>
          </Box>
        </VStack>
        <Box layerStyle="stackBgBox">
          <Text as="span">👾 공통사용</Text>
          <Flex wrap="wrap" gap={2}>
            <Badge colorScheme="red">Figma</Badge>
            <Badge colorScheme="red">Zeplin</Badge>
            <Badge colorScheme="green">Visual Studio Code</Badge>
            <Badge colorScheme="green">Git</Badge>
            <Badge colorScheme="green">SourceTree</Badge>
          </Flex>
        </Box>
      </VStack>
    </Section>
  );
});
export default Project;
