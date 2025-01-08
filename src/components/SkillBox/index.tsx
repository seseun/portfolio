import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SkillBoxProps {
  noBg?: boolean;
  align?: string;
  children: ReactNode;
}

function SkillBox({
  noBg = false,
  align = "flex-start",
  children,
  ...props
}: SkillBoxProps & BoxProps) {
  return (
    <Box
      bgColor={noBg ? "transparent" : "gray.800"}
      borderRadius="lg"
      display="flex"
      gap={2}
      p={noBg ? 0 : 3}
      width="100%"
      {...props}
    >
      {!noBg && <Text as="span">👾</Text>}
      <Flex gap={1} justifyContent={align} w="full" wrap="wrap">
        {children}
      </Flex>
    </Box>
  );
}
export default SkillBox;
