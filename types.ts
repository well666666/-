export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  coreValue?: string;
  achievements?: string[];
  responsibilities?: string[];
  description?: string[]; // Keep optional for backward compatibility
}

export interface Skill {
  category: string;
  items: {
    title: string;
    description: string;
  }[];
  tags: string[];
}

export interface JobCondition {
  label: string;
  value: string;
  icon?: string;
}

export interface Certificate {
  name: string;
}

export interface ProfileSummaryItem {
  title: string;
  content: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summaryTags: string[];
  summaryItems: ProfileSummaryItem[];
}