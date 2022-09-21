export interface ProjectCardType {
  title: string;
  banner: string;
  bannerAlt: string;
  summary: string;
  description: string;
  tags: string[];
  links: {name: string; path: string}[]
}