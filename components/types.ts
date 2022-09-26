import { ReactElement } from 'react';

export interface ProjectCardType {
  title: string;
  banner: string;
  bannerAlt: string;
  summary: string;
  description: ReactElement;
  tags: string[];
  links: { name: string; path: string }[];
}

export interface NavLinkType {
  name: string;
  path: string;
  icon?: ReactElement;
}

export interface SkillItemType {
  icon?: ReactElement;
  text: string;
  skillLevel: string;
}

export interface SocialLinkType {
  icon: ReactElement;
  link: string;
}

