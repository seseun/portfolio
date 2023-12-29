import { Badge, HStack, Heading, VStack } from "@chakra-ui/react";
import { forwardRef } from "react";

import { Section } from "components";

const Skill = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section
      ref={ref}
      sx={{
        h4: {
          fontSize: "md",
          flex: "100px 0 0",
        },
      }}
      {...props}
    >
      <Heading as="h2">👾 사용할 수 있거나, 경험해 본 기술이에요.</Heading>
      <VStack align="stretch" spacing={4}>
        <HStack align="flex-start">
          <Heading as="h4" lineHeight="short">
            Front-end / Publishing
          </Heading>
          <HStack flexWrap="wrap">
            <Badge colorScheme="blue">React</Badge>
            <Badge colorScheme="blue">TypeScript</Badge>
            <Badge colorScheme="blue">JavaScript</Badge>
            <Badge colorScheme="blue">React Native</Badge>
            <Badge colorScheme="blue">Jsp</Badge>
            <Badge colorScheme="blue">Vue</Badge>
            <Badge colorScheme="blue">Angular</Badge>
            <Badge colorScheme="blue">Flutter</Badge>
            <Badge colorScheme="blue">Chakra UI</Badge>
            <Badge colorScheme="blue">Gsap</Badge>
            <Badge colorScheme="blue">React-redux</Badge>
            <Badge colorScheme="blue">React-query</Badge>
            <Badge colorScheme="blue">npm</Badge>
            <Badge colorScheme="blue">yarn</Badge>
            <Badge colorScheme="blue">Google Firebase</Badge>
            <Badge colorScheme="blue">Firebase Realtime Database</Badge>
            <Badge colorScheme="purple">HTML5</Badge>
            <Badge colorScheme="purple">SCSS</Badge>
            <Badge colorScheme="purple">CSS 3</Badge>
            <Badge colorScheme="purple">JQuery</Badge>
            <Badge colorScheme="purple">Bootstrap</Badge>
            <Badge colorScheme="purple">react-bootstrap</Badge>
            <Badge colorScheme="purple">react-native-bootstrap</Badge>
          </HStack>
        </HStack>
        <HStack>
          <Heading as="h4">Design</Heading>
          <Badge colorScheme="red">Figma</Badge>
          <Badge colorScheme="red">Zeplin</Badge>
          <Badge colorScheme="red">Adobe Photoshop</Badge>
          <Badge colorScheme="red">Adobe Illustrator</Badge>
        </HStack>
        <HStack>
          <Heading as="h4">Tool</Heading>
          <Badge colorScheme="green">Git</Badge>
          <Badge colorScheme="green">SVN</Badge>
          <Badge colorScheme="green">VSCode</Badge>
          <Badge colorScheme="green">VSCode Git-graph</Badge>
          <Badge colorScheme="green">SourceTree</Badge>
          <Badge colorScheme="green">Swagger</Badge>
          <Badge colorScheme="green">Postman</Badge>
          <Badge colorScheme="green">IntelliJ IDEA</Badge>
          <Badge colorScheme="green">Android Studio</Badge>
        </HStack>
        <HStack>
          <Heading as="h4">etc.</Heading>
          <Badge colorScheme="gray">카페24</Badge>
          <Badge colorScheme="gray">메이크샵</Badge>
        </HStack>
      </VStack>
    </Section>
  );
});
export default Skill;
