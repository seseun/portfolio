import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

import { MockupFigure, SkillBox } from "components";
import ProjectProps from "type/ProjectProps";
import TemplateProps from "type/TemplateProps";

import ProjectItem from "./ProjectItem";
import TemplateItem from "./TemplateItem";

interface ProjectCardProps extends ProjectProps {
  company?: string;
  desc: string;
  date: string;
  imgUrl?: string;
  templates?: TemplateProps[];
  projects?: ProjectProps[];
  children?: ReactNode;
}

function ProjectCard({
  prjKey,
  company,
  subject,
  date,
  desc,
  imgUrl,
  link,
  comments,
  templates,
  projects,
  children,
  skills,
}: ProjectCardProps) {
  return (
    <VStack
      align="stretch"
      spacing={6}
      bgColor="gray.900"
      borderRadius="lg"
      px={8}
      py={6}
    >
      <Heading as="h3">
        {company && `[${company}] `}
        {subject}
        <Text as="small">{date}</Text>
      </Heading>

      <Text whiteSpace="pre" fontSize="md" color="gray.300">
        {desc}
      </Text>
      {children && children}
      {!projects ? (
        <HStack align="flex-end" spacing={5}>
          {imgUrl && (
            <MockupFigure imgUrl={imgUrl} flex="640px 0 0" w="640px" />
          )}
          <Box as="ul" layerStyle="iconList">
            {link && (
              <Box as="li">
                <Text as="i">🔗</Text>
                <Button as="a" target="_blank" variant="link" href={link}>
                  {link}
                </Button>
              </Box>
            )}
            {comments &&
              comments.length > 0 &&
              comments.map((comment, index) => {
                return (
                  <Box as="li" key={`comment-${prjKey}-${index}`} mt={1.5}>
                    <Text as="i">📌</Text>
                    <Text fontSize="sm">{comment}</Text>
                  </Box>
                );
              })}
          </Box>
        </HStack>
      ) : (
        <HStack align="stretch" spacing={6}>
          <Box as="ul" layerStyle="iconList" flex={1}>
            {projects.length > 0 &&
              projects.slice(0, 6).map((project, index) => {
                return (
                  <ProjectItem
                    project={project}
                    key={`project-${prjKey}-${index}`}
                  />
                );
              })}
          </Box>
          <Box
            as="ul"
            layerStyle="iconList"
            borderLeftColor="gray.800"
            borderLeftWidth="1px"
            pl={6}
            flex={1}
          >
            {projects.length > 0 &&
              projects.slice(6).map((project, index) => {
                return (
                  <ProjectItem
                    project={project}
                    key={`project-${prjKey}-${index + 7}`}
                  />
                );
              })}
          </Box>
        </HStack>
      )}

      {templates && (
        <Box as="ul" display="flex" flexWrap="wrap" gap={5}>
          {templates.length > 0 &&
            templates.slice(0).map((template, index) => {
              return (
                <TemplateItem
                  template={template}
                  key={`template-${prjKey}-${index}`}
                />
              );
            })}
        </Box>
      )}
      <SkillBox>{skills}</SkillBox>
    </VStack>
  );
}
export default ProjectCard;
