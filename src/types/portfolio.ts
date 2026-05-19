import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail: string;
};

export type ExpertiseCategory = {
  title: string;
  icon: LucideIcon;
  signal: string;
  tools: string[];
  grade: string;
};

export type Project = {
  title: string;
  description: string;
  problem: string;
  impact: string;
  metrics: string[];
  technologies: string[];
  highlights: string[];
  icon: LucideIcon;
};

export type TimelineItem = {
  role: string;
  company: string;
  focus: string[];
  achievements: string[];
  period: string;
};

export type Certification = {
  title: string;
  code: string;
  issuer: string;
  icon: LucideIcon;
};

export type Repository = {
  name: string;
  description: string;
  stack: string[];
  signal: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};
