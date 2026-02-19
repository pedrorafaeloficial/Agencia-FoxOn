import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: number; // For Bento Grid layout
  letter?: string; // For REC Protocol overlay
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  highlight?: string; // Short result highlight (e.g. "ROAS 5x")
}