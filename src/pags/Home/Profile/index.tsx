import {
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Tween, Timeline } from "react-gsap";

import profile from "assets/images/profile.jpg";
import { forwardRef } from "react";

const Profile = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <HStack
      spacing={12}
      alignItems="flex-end"
      h="calc(100vh - 64px)"
      ref={ref}
      {...props}
    >
      <Image src={profile} h="680px" />
      <VStack align="stretch" spacing={8}>
        <Heading
          as="h1"
          color="gray.100"
          fontSize="5xl"
          fontWeight={600}
          lineHeight="short"
        >
          안녕하세요
          <Timeline
            repeat={-1} // 무한 반복
            yoyo // 애니메이션 반복 시 역방향으로 진행
          >
            <Tween from={{ scaleX: 1 }} to={{ scaleX: -1 }} duration={1.5}>
              <Text as="span" display="inline-block">
                🫡
              </Text>
            </Tween>
          </Timeline>
          <br />
          <Text
            as="strong"
            bgClip="text"
            bgGradient={["linear(to-r, yellow.200, red.200)"]}
            fontWeight={800}
          >
            이승은
          </Text>
          입니다.
        </Heading>
        <HStack spacing={5} color="gray.400" fontSize="lg">
          <Text>📱 +82 10-5492-1581</Text>
          <Divider orientation="vertical" h={4} />
          <Text>🏠 부산진구 전포대로</Text>
          <Divider orientation="vertical" h={4} />
          <Text>✉️ dev.seseun@gmail.com</Text>
        </HStack>
        <Text fontSize="xl" lineHeight="tall">
          디자인, 퍼블리싱으로 IT업계에 발을 들이게 되었습니다.
          <br />
          디자인보다는 퍼블리싱에, 퍼블리싱보다는 프론트개발에 재미를 느낍니다.
          <br />
          인터랙티브한 사이트에 관심이 있고, 잘 디자인 된 UI/UX를 좋아합니다.
        </Text>
      </VStack>
    </HStack>
  );
});
export default Profile;
