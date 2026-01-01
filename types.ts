
export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  description: string[];
  techStack: string[];
  status?: string;
  githubUrl?: string;
  icon: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  description?: string;
}

export interface ResumeData {
  profile: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    summary: string;
    resumeUrl: string;
    socials: SocialLink[];
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  achievements: string[];
}