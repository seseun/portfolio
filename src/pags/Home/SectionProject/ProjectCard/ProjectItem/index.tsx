import { Box, Button, Text } from "@chakra-ui/react";
import { SkillBox } from "components";
import ProjectProps from "type/ProjectProps";

interface ProjectItemProps {
  project: ProjectProps;
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Box as="li" mt={8}>
      <Text as="i">📌</Text>
      <Box as="div">
        <Text as="strong">{project.subject}</Text>
        {project.link && (
          <Text
            as="p"
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Text as="span" flexShrink={0}>
              -&nbsp;
            </Text>
            <Box as="span" flexGrow={1}>
              <Button
                as="a"
                target="_blank"
                variant="link"
                href={project.link}
                display="inline-block"
                wordBreak="break-all"
                whiteSpace="normal"
              >
                {project.link}
              </Button>
            </Box>
          </Text>
        )}
        {project.comments &&
          project.comments.length > 0 &&
          project.comments.map((comment, index) => {
            return (
              <Text as="p" key={`comment-${project.prjKey}-${index}`}>
                - {comment}
              </Text>
            );
          })}
        <SkillBox noBg mt={1}>
          {project.skills}
        </SkillBox>
      </Box>
    </Box>
  );
}
export default ProjectItem;
