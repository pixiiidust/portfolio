export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  role: string;
  status: string;
  context: string;
  goal: string;
  hypothesis: string;
  problem: string[];
  solution: string[];
  metrics: string[];
  risks: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  paperLabel?: string;
  paperLink?: string;
  techFocus: string;
  link: string;
  repoLink?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  type: 'email' | 'link';
}