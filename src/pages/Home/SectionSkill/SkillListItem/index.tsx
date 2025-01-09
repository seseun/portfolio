import { Box, HStack, Heading, StackProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SkillListItemProps {
  category: string;
  children: ReactNode;
}
interface SkillBadgeListProps {
  children: ReactNode;
}
export function SkillBadgeList({
  children,
  ...props
}: SkillBadgeListProps & StackProps) {
  return (
    <HStack flexWrap="wrap" spacing={1} {...props}>
      {children}
    </HStack>
  );
}
function SkillListItem({ category, children }: SkillListItemProps) {
  return (
    <HStack align="flex-start">
      <Heading as="h4" lineHeight="short">
        {category}
      </Heading>
      <Box>{children}</Box>
    </HStack>
  );
}
export default SkillListItem;
