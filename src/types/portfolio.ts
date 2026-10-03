export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  kind: 'screenshot' | 'mockup' | 'concept';
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  summary: string;
  description: string;
  category: string;
  technologies: string[];
  featured?: boolean;
  status?: string;
  logo?: string;
  preview?: ProjectImage;
  gallery: ProjectImage[];
  problem?: string;
  solution?: string;
  role?: string;
  architecture?: string[];
  process?: string[];
  result?: string;
  note?: string;
  github?: string;
  demo?: string;
  predecessor?: {
    title: string;
    description: string;
    problem: string;
    solution: string;
    result: string;
    technologies: string[];
    github: string;
    gallery: ProjectImage[];
  };
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  area?: string;
  tags?: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  icon?: string;
  completed?: boolean;
};
