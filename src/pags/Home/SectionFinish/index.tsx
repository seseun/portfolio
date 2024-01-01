import { Heading, Text, VStack } from "@chakra-ui/react";
import { forwardRef } from "react";

import { Section } from "components";

const SectionFinish = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Section ref={ref} {...props}>
      <Heading as="h2">🙇‍♀️ 읽어주셔서 감사합니다.</Heading>
      <VStack align="stretch" spacing={6}>
        <Text fontSize="xl" color="gray.300">
          저는 개발 경력이 길지 않습니다.
        </Text>
      </VStack>
    </Section>
  );
});
export default SectionFinish;
