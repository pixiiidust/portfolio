export interface Link {
  label: string;
  href: string;
}

export interface CaseStudy {
  slug: string;
  kind: 'work';
  title: string;
  tagline: string;
  role: string;
  status: string;
  tech: string[];
  links: Link[];
  insight: string;
  context: string;
  goal: string;
  hypothesis: string;
  problem: string[];
  solution: string;
  metrics: string[];
  risks?: string[];
  reflection?: string;
}

export interface Project {
  slug: string;
  kind: 'project';
  title: string;
  tagline: string;
  tech: string[];
  links: Link[];
  insight: string;
  problem: string;
  approach: string;
  result: string;
  reflection?: string;
}
