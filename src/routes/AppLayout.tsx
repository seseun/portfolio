import { Box, Button, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Outlet } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

function AppLayout() {
  return (
    <Box as="main" layerStyle="main">
      <Outlet />
      <Box as="footer" layerStyle="footer">
        <Text>
          * 구체적인 이력 내용은 포트폴리오 링크를 확인하신 이력서를
          참고해주세요 :^)
          {/* , 혹은{" "}
          <Button
            as="a"
            href="/public/assets/이력서_이승은.pdf"
            download
            variant="link"
            color="yellow.600"
          >
            이 PDF파일
          </Button>
          을 참고해주세요  */}
        </Text>
      </Box>
    </Box>
  );
}

export default AppLayout;
