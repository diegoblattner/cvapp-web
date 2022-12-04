export type Profile = {
  name: string;
  position: string;
  avatar: string;
  email: string;
  github: string;
  linkedin: string;
  cvLink: string;
  bio: string;
};

export type Experience = {
  role: string;
  startDate: string;
  endDate: string;
  company: string;
  projects: {
    name?: string;
    description?: string;
    tasks?: string[];
  }[];
};

export type Education = {
  institution: string;
  course: string;
  period: string;
};

export type Certification = {
  name: string;
  provider: string;
  date: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Company = {
  name: string;
  avatar: string;
  site: string;
};

export type CVData = {
  profile: Profile;
  skills: string[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  companies: {
    [name: string]: Company;
  }
};
