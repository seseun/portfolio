import { ReactNode } from "react";

interface ProjectProps {
  key: string;
  subject: string;
  link?: string;
  comments?: Array<string | ReactNode>;
  skills: ReactNode;
}

export default ProjectProps;
