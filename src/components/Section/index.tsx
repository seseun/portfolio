import { StackProps, VStack } from "@chakra-ui/react";
import { ReactNode, forwardRef } from "react";

interface SectionProps {
  children: ReactNode;
}
const Section = forwardRef<HTMLDivElement, SectionProps & StackProps>(
  ({ children, ...props }, ref) => {
    return (
      <VStack
        as="section"
        align="stretch"
        spacing={12}
        pt={16}
        borderTopColor="gray.800"
        borderTopWidth="1px"
        ref={ref}
        sx={{
          h2: {
            fontSize: "2xl",
            color: "gray.100",
            small: {
              fontSize: "lg",
              fontWeight: 600,
              pl: 3,
              color: "gray.500",
            },
          },
          h3: {
            fontSize: "xl",
            lineHeight: "tall",
            color: "gray.200",
            small: {
              fontSize: "lg",
              fontWeight: 600,
              pl: 3,
              color: "gray.500",
            },
          },
        }}
        {...props}
      >
        {children}
      </VStack>
    );
  },
);

export default Section;
