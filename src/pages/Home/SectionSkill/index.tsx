import { Badge, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { forwardRef } from "react";

import { Section } from "components";

import SkillListItem, { SkillBadgeList } from "./SkillListItem";

const SectionSkill = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref} {...props}>
      <Flex justify="space-between" align="flex-end">
        <Heading as="h2">
          👾 기술스택<Text as="small">우측 배지를 참고해주세요.</Text>
        </Heading>
        <Flex gap={2}>
          <Badge>자주 사용했습니다</Badge>
          <Badge variant="outline">사용해서 작업을 해보았습니다</Badge>
        </Flex>
      </Flex>
      <VStack
        align="stretch"
        spacing={4}
        sx={{
          h4: {
            fontSize: "sm",
            flex: "160px 0 0",
          },
        }}
      >
        <SkillListItem category="프론트엔드 / 퍼블리싱">
          <SkillBadgeList>
            <Badge colorScheme="blue">Next.js</Badge>
            <Badge colorScheme="blue">React</Badge>
            <Badge colorScheme="blue">TypeScript</Badge>
            <Badge colorScheme="blue">JavaScript</Badge>
            <Badge colorScheme="blue" variant="outline">
              Vue
            </Badge>
            <Badge colorScheme="blue" variant="outline">
              Flutter
            </Badge>
            <Badge colorScheme="blue" variant="outline">
              React Native
            </Badge>
          </SkillBadgeList>
          <SkillBadgeList mt={1}>
            <Badge colorScheme="blue">Chakra-ui</Badge>
            <Badge colorScheme="blue">Tailwind</Badge>
            <Badge colorScheme="blue">React-bootstrap</Badge>
            <Badge colorScheme="blue">Gsap</Badge>
            <Badge colorScheme="blue">React-gsap</Badge>
            <Badge colorScheme="blue">React-query</Badge>
            <Badge colorScheme="blue">React-hook-form</Badge>
            <Badge colorScheme="blue" variant="outline">
              React-redux
            </Badge>
            <Badge colorScheme="blue" variant="outline">
              Zustand
            </Badge>
          </SkillBadgeList>
          <SkillBadgeList mt={1}>
            <Badge colorScheme="purple">HTML5</Badge>
            <Badge colorScheme="purple" variant="outline">
              JSP
            </Badge>
            <Badge colorScheme="purple" variant="outline">
              PHP
            </Badge>
            <Badge colorScheme="purple">SCSS</Badge>
            <Badge colorScheme="purple">CSS3</Badge>
            <Badge colorScheme="purple">JQuery</Badge>
            <Badge colorScheme="purple">Bootstrap</Badge>
          </SkillBadgeList>
        </SkillListItem>
        <SkillListItem category="디자인">
          <SkillBadgeList>
            <Badge colorScheme="red">Figma</Badge>
            <Badge colorScheme="red" variant="outline">
              Zeplin
            </Badge>
            <Badge colorScheme="red">Adobe Photoshop</Badge>
            <Badge colorScheme="red">Adobe Illustrator</Badge>
          </SkillBadgeList>
        </SkillListItem>
        <SkillListItem category="도구/툴">
          <SkillBadgeList>
            <Badge colorScheme="green">GitHub</Badge>
            <Badge colorScheme="green">GitLab</Badge>
            <Badge colorScheme="green">VSCode</Badge>
            <Badge colorScheme="green">SourceTree</Badge>
            <Badge colorScheme="green">Swagger</Badge>
            <Badge colorScheme="green" variant="outline">
              Postman
            </Badge>
            <Badge colorScheme="green" variant="outline">
              IntelliJ IDEA
            </Badge>
            <Badge colorScheme="green" variant="outline">
              Android Studio
            </Badge>
            <Badge colorScheme="green">FileZilla</Badge>
            <Badge colorScheme="green">Editplus</Badge>
          </SkillBadgeList>
        </SkillListItem>
        <SkillListItem category="Etc.">
          <SkillBadgeList>
            <Badge colorScheme="gray">카페24</Badge>
            <Badge colorScheme="gray">메이크샵</Badge>
          </SkillBadgeList>
        </SkillListItem>
      </VStack>
    </Section>
  );
});
export default SectionSkill;
