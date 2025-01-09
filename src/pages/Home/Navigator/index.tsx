import { Flex } from "@chakra-ui/react";
import RefGeneric from "type/RefGeneric";
import NavButton from "./NavButton";

interface NavigatorProps<T extends Record<string, unknown>> {
  sectionRefs: RefGeneric<T>;
}

function Navigator<T extends Record<string, unknown>>({
  sectionRefs,
}: NavigatorProps<T>) {
  const scrollToSection = (sectionKey: keyof T) => {
    const sectionRef = sectionRefs[sectionKey];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Flex
      as="aside"
      align="center"
      bgColor="gray.900"
      borderRadius="lg"
      bottom={10}
      direction="column"
      justify="flex-start"
      left={4}
      position="fixed"
      py={2}
      w={12}
      zIndex={99}
    >
      <NavButton emoji="🙇‍♀️" onClick={() => scrollToTop()} />
      <NavButton
        emoji="🎢"
        text="경력"
        onClick={() => scrollToSection("career")}
      />
      <NavButton
        emoji="👾"
        text="기술스택"
        onClick={() => scrollToSection("skill")}
      />
      <NavButton
        emoji="🚀"
        text="프로젝트"
        onClick={() => scrollToSection("project")}
      />
      <NavButton emoji="🙇‍♀️" onClick={() => scrollToSection("finish")} />
    </Flex>
  );
}

export default Navigator;
