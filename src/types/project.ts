export type ProjectStatus =
  | 'concept'
  | 'experiment'
  | 'personal'
  | 'in-development';

export interface ProjectTheme {
  primary: string;
  accent: string;
  surface: string;
  glow: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  index: string; // e.g. "01", "02"
  title: string;
  titleFa: string;
  category: string;
  categoryFa: string;
  year: string;
  status: ProjectStatus;
  statusLabelEn: string;
  statusLabelFa: string;
  summary: string;
  summaryFa: string;
  role: string;
  roleFa: string;
  services: string[];
  servicesFa: string[];
  creativeDirection: string;
  creativeDirectionFa: string;
  designDecisions: {
    title: string;
    titleFa: string;
    description: string;
    descriptionFa: string;
  }[];
  coverImage: string;
  gallery: {
    url: string;
    caption: string;
    captionFa: string;
    aspectRatio?: 'landscape' | 'portrait' | 'square';
  }[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  theme: ProjectTheme;
}
