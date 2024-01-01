import { Heading, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CareerParaProps {
  subject: string;
  children: ReactNode;
}

function CareerPara({ subject, children }: CareerParaProps) {
  return (
    <VStack align="stretch" spacing={3}>
      <Heading as="h3" whiteSpace="pre">
        {subject}
      </Heading>
      {children}
    </VStack>
  );
}
export default CareerPara;
