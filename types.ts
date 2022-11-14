import { ReactElement } from 'react';

export interface ProjectCardType {
  title: string;
  banner?: string;
  bannerAlt?: string;
  summary: string;
  description?: string;
  media?: MediaImageType[];
  tags?: string[];
  links: { name: string; path: string; icon?: ReactElement }[];
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
  title: string;
}

export interface MediaImageType {
  src: string;
  alt: string;
  height: number;
  width: number;
  mobileImg?: {
    src: string;
    height: number;
    width: number;
  };
}
