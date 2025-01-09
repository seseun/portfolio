import { Box, Button, Text } from "@chakra-ui/react";
import { MockupFigure } from "components";
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
          alignItems: "flex-start",
          flex: "32% 1 1",
          flexDirection: "column",
          ul: {
            mt: 5,
          },
        },
        _first: {
          alignItems: "flex-end",
          flexDirection: "row",
          figure: {
            flex: "640px 0 0",
            w: "640px",
          },
          ul: {
            ml: 5,
          },
        },
      }}
    >
      {template.imgUrl && <MockupFigure imgUrl={template.imgUrl} />}

      <Box as="ul" layerStyle="iconList">
        <Box as="li">
          <Text as="strong" color="gray.400">
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
          <Box as="li">
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
