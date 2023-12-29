import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import RefGeneric from "type/RefGeneric";

interface SectionNavProps<T extends Record<string, unknown>> {
  sectionRefs: RefGeneric<T>;
}

function SectionNav<T extends Record<string, unknown>>({
  sectionRefs,
}: SectionNavProps<T>) {
  const scrollToSection = (sectionKey: keyof T) => {
    const sectionRef = sectionRefs[sectionKey];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex
      as="aside"
      position="fixed"
      left="1rem"
      top="1rem"
      direction="column"
      justify="flex-start"
      align="flex-start"
      sx={{
        ".chakra-button": {
          padding: 2,
          fontSize: "2xl",
          _hover: {
            ".chakra-text": {
              opacity: 1,
            },
          },
          ".chakra-text": {
            opacity: 0,
            py: 1,
            px: 3,
            borderRadius: "xl",
            fontSize: "md",
            fontWeight: "500",
            bg: "gray.900",
            transition: ".2s ease;",
          },
        },
      }}
    >
      <Button onClick={() => scrollToSection("profile")}>
        🫡<Text>프로필</Text>
      </Button>
      <Button onClick={() => scrollToSection("career")}>
        🎢<Text>경력</Text>
      </Button>
      <Button onClick={() => scrollToSection("skill")}>
        👾<Text>기술스택</Text>
      </Button>
      <Button onClick={() => scrollToSection("project")}>
        🖥️<Text>프로젝트</Text>
      </Button>
    </Flex>
  );
}

export default SectionNav;
