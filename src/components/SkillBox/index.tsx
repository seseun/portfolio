import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SkillBoxProps {
  noBg?: boolean;
  children: ReactNode;
}

function SkillBox({ noBg, children, ...props }: SkillBoxProps & BoxProps) {
  return (
    <Box
      display="flex"
      gap={2}
      p={noBg ? 0 : 3}
      bgColor={noBg ? "transparent" : "gray.800"}
      borderRadius="lg"
      width="100%"
      {...props}
    >
      {!noBg && <Text as="span">👾</Text>}
      <Flex wrap="wrap" gap={2}>
        {children}
      </Flex>
    </Box>
  );
}
export default SkillBox;
