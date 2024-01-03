import { Badge, Heading, VStack } from "@chakra-ui/react";
import { forwardRef } from "react";

import { Section } from "components";
import SkillListItem from "./SkillListItem";

const SectionSkill = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref} {...props}>
      <Heading as="h2">👾 사용할 수 있거나, 경험해 본 기술이에요.</Heading>
      <VStack
        align="stretch"
        spacing={4}
        sx={{
          h4: {
            fontSize: "md",
            flex: "100px 0 0",
          },
        }}
      >
        <SkillListItem category="Front-end & Publishing">
          <Badge colorScheme="blue">React</Badge>
          <Badge colorScheme="blue">TypeScript</Badge>
          <Badge colorScheme="blue">JavaScript</Badge>
          <Badge colorScheme="blue">React Native</Badge>
          <Badge colorScheme="blue">Jsp</Badge>
          <Badge colorScheme="blue">Vue</Badge>
          <Badge colorScheme="blue">Flutter</Badge>
          <Badge colorScheme="blue">chakra-ui</Badge>
          <Badge colorScheme="blue">gsap</Badge>
          <Badge colorScheme="blue">react-redux</Badge>
          <Badge colorScheme="blue">react-query</Badge>
          <Badge colorScheme="blue">react-hook-form</Badge>
          <Badge colorScheme="blue">npm</Badge>
          <Badge colorScheme="blue">yarn</Badge>
          <Badge colorScheme="blue">Google Firebase</Badge>
          <Badge colorScheme="blue">Firebase Realtime Database</Badge>
          <Badge colorScheme="purple">HTML5</Badge>
          <Badge colorScheme="purple">SCSS</Badge>
          <Badge colorScheme="purple">CSS 3</Badge>
          <Badge colorScheme="purple">JQuery</Badge>
          <Badge colorScheme="purple">bootstrap</Badge>
          <Badge colorScheme="purple">react-bootstrap</Badge>
          <Badge colorScheme="purple">react-native-bootstrap</Badge>
        </SkillListItem>
        <SkillListItem category="Design">
          <Badge colorScheme="red">Figma</Badge>
          <Badge colorScheme="red">Zeplin</Badge>
          <Badge colorScheme="red">Adobe Photoshop</Badge>
          <Badge colorScheme="red">Adobe Illustrator</Badge>
        </SkillListItem>
        <SkillListItem category="Tool">
          <Badge colorScheme="green">Git</Badge>
          <Badge colorScheme="green">SVN</Badge>
          <Badge colorScheme="green">VSCode</Badge>
          <Badge colorScheme="green">SourceTree</Badge>
          <Badge colorScheme="green">Swagger</Badge>
          <Badge colorScheme="green">Postman</Badge>
          <Badge colorScheme="green">IntelliJ IDEA</Badge>
          <Badge colorScheme="green">Android Studio</Badge>
          <Badge colorScheme="green">FileZilla</Badge>
          <Badge colorScheme="green">Editplus</Badge>
        </SkillListItem>
        <SkillListItem category="etc.">
          <Badge colorScheme="gray">카페24</Badge>
          <Badge colorScheme="gray">메이크샵</Badge>
        </SkillListItem>
      </VStack>
    </Section>
  );
});
export default SectionSkill;
