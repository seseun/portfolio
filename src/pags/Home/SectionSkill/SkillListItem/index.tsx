import { HStack, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  category: string;
  children: ReactNode;
}

function SkillListItem({ category, children }: Props) {
  return (
    <HStack align="flex-start">
      <Heading as="h4" lineHeight="tall">
        {category}
      </Heading>
      <HStack flexWrap="wrap">{children}</HStack>
    </HStack>
  );
}
export default SkillListItem;
