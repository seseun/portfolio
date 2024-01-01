import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { SkillBox } from "components";
import DesignProps from "type/DesignProps";

interface DesignItemProps {
  design: DesignProps;
}

function DesignItem({ design }: DesignItemProps) {
  return (
    <Box as="li" mt={8}>
      {design.imgUrl && (
        <Box as="figure">
          <Image src={design.imgUrl} />
        </Box>
      )}
      <Text as="strong" color="gray.400" fontSize="1.25rem !important">
        {design.subject}
      </Text>
    </Box>
  );
}
export default DesignItem;
