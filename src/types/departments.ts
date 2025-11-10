import type { ReactNode } from 'react';

export interface Team {
  name: string;
  description: string;
  responsibilities: string[];
}

export interface LearnMoreContent {
  teams: Team[];
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
