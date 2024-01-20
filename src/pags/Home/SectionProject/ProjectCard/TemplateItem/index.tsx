import { Box, Button, Image, Text } from "@chakra-ui/react";
import TemplateProps from "type/TemplateProps";

interface TemplateItemProps {
  template: TemplateProps;
}

function TemplateItem({ template }: TemplateItemProps) {
  return (
    <Box
      as="li"
      display="flex"
      sx={{
        _notFirst: {
          flex: "32% 1 1",
          flexDirection: "column",
          alignItems: "flex-start",
          figure: {
            w: "100%",
            h: "360px",
          },
          ul: {
            mt: 5,
          },
        },
        _first: {
          flexDirection: "row",
          alignItems: "flex-end",
          figure: {
            w: "640px",
            flex: "640px 0 0",
            h: "360px",
          },
          ul: {
            ml: 5,
          },
        },
      }}
    >
      {template.imgUrl && (
        <Box
          as="figure"
          overflow="auto"
          borderWidth="1rem"
          borderRadius="lg"
          borderColor="gray.700"
          sx={{
            "::-webkit-scrollbar": {
              width: "8px",
            },
            "::-webkit-scrollbar-thumb": {
              bg: "gray.600",
            },
            "::-webkit-scrollbar-track": {
              bg: "gray.800",
            },
          }}
        >
          <Image src={template.imgUrl} />
        </Box>
      )}

      <Box as="ul" layerStyle="iconList">
        <Box as="li">
          <Text as="strong" color="gray.400" fontSize="1.25rem !important">
            {template.subject}
          </Text>
        </Box>
        {template.date && (
          <Box as="li" mt={2}>
            <Text as="i">📆</Text>
            <Text>{template.date}</Text>
          </Box>
        )}
        {template.link && (
          <Box as="li" mt={1}>
            <Text as="i">🔗</Text>
            <Button as="a" target="_blank" variant="link" href={template.link}>
              {template.link}
            </Button>
          </Box>
        )}
        {template.desc && (
          <Box as="li" mt={1}>
            <Text as="i">📌</Text>
            <Text>{template.desc}</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}
export default TemplateItem;
