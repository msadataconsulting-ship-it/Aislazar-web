import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  image: string;
  detailImage?: string;
}

export interface Differential {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Industry {
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
  items?: string[];
}