export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  features: string[];
  contribution?: string;
  architecture: string;
  decisions: string;
  limitations: string;
  evidence: string;
}
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}
