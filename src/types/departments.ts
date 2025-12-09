import type { ReactNode } from 'react';

export interface LearnMoreContent {
  kpi: string;
  projects: string[];
  skillsYoullGain: string;
  idealFor: string;
}

export interface DepartmentData {
  id: string;
  name: string;
  description: string;
  responsibilities: string[];
  requiresApplication: boolean;
  learnMoreContent: LearnMoreContent;
}

export interface Department extends DepartmentData {
  icon: ReactNode;
}
