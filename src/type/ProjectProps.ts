import { ReactNode } from "react";

interface ProjectProps {
  prjKey: string;
  subject: string;
  link?: string;
  comments?: Array<string | ReactNode>;
  skills: ReactNode;
}

export default ProjectProps;
