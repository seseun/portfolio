import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";

import { SkillBox } from "components";
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
  key,
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
      <Text whiteSpace="pre">{desc}</Text>
      {children && children}
      {!projects ? (
        <HStack align="flex-end" spacing={5}>
          {imgUrl && (
            <Box
              as="figure"
              flex="640px 0 0"
              width="640px"
              height="360px"
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
              <Image src={imgUrl} />
            </Box>
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
                  <Box as="li" key={`comment-${key}-${index}`} mt={2}>
                    <Text as="i">📌</Text>
                    <Text>{comment}</Text>
                  </Box>
                );
              })}
          </Box>
        </HStack>
      ) : (
        <HStack align="stretch" spacing={6}>
          <Box as="ul" layerStyle="iconList">
            {projects.length > 0 &&
              projects.slice(0, 7).map((project, index) => {
                return (
                  <ProjectItem
                    project={project}
                    key={`project-${key}-${index}`}
                  />
                );
              })}
          </Box>
          <Box
            as="ul"
            layerStyle="iconList"
            borderLeftColor="gray.700"
            borderLeftWidth="1px"
            pl={6}
          >
            {projects.length > 0 &&
              projects.slice(7).map((project, index) => {
                return (
                  <ProjectItem
                    project={project}
                    key={`project-${key}-${index}`}
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
                  key={`template-${key}-${index}`}
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
